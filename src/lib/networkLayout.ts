export type NetworkEdge = {
  source: string
  target: string
}

type LayoutOptions = {
  width: number
  height: number
  iterations?: number
}

type Point = { x: number; y: number }

export function computeNetworkLayout(
  nodeIds: string[],
  edges: NetworkEdge[],
  { width, height, iterations = 300 }: LayoutOptions,
): Record<string, Point> {
  const centerX = width / 2
  const centerY = height / 2

  type SimNode = { x: number; y: number; vx: number; vy: number; fixed: boolean }
  const nodes: Record<string, SimNode> = {}

  nodeIds.forEach((id, index) => {
    if (index === 0) {
      nodes[id] = { x: centerX, y: centerY, vx: 0, vy: 0, fixed: true }
      return
    }
    const angle = Math.random() * Math.PI * 2
    const radius = Math.min(width, height) * (0.15 + Math.random() * 0.3)
    nodes[id] = {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      vx: 0,
      vy: 0,
      fixed: false,
    }
  })

  const repulsion = 5000
  const springLength = Math.min(width, height) * 0.55
  const springStrength = 0.02
  const centerStrength = 0.003
  const damping = 0.85
  const padding = 48

  for (let step = 0; step < iterations; step++) {
    for (let i = 0; i < nodeIds.length; i++) {
      for (let j = i + 1; j < nodeIds.length; j++) {
        const a = nodes[nodeIds[i]]
        const b = nodes[nodeIds[j]]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const distSq = Math.max(dx * dx + dy * dy, 1)
        const dist = Math.sqrt(distSq)
        const force = repulsion / distSq
        const fx = (dx / dist) * force
        const fy = (dy / dist) * force
        if (!a.fixed) {
          a.vx += fx
          a.vy += fy
        }
        if (!b.fixed) {
          b.vx -= fx
          b.vy -= fy
        }
      }
    }

    for (const edge of edges) {
      const a = nodes[edge.source]
      const b = nodes[edge.target]
      if (!a || !b) continue
      const dx = b.x - a.x
      const dy = b.y - a.y
      const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1)
      const force = (dist - springLength) * springStrength
      const fx = (dx / dist) * force
      const fy = (dy / dist) * force
      if (!a.fixed) {
        a.vx += fx
        a.vy += fy
      }
      if (!b.fixed) {
        b.vx -= fx
        b.vy -= fy
      }
    }

    for (const id of nodeIds) {
      const node = nodes[id]
      if (node.fixed) continue
      node.vx += (centerX - node.x) * centerStrength
      node.vy += (centerY - node.y) * centerStrength
      node.vx *= damping
      node.vy *= damping
      node.x = Math.min(Math.max(node.x + node.vx, padding), width - padding)
      node.y = Math.min(Math.max(node.y + node.vy, padding), height - padding)
    }
  }

  const result: Record<string, Point> = {}
  for (const id of nodeIds) {
    result[id] = { x: nodes[id].x, y: nodes[id].y }
  }
  return result
}
