import type { SVGProps } from "react"

function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

export function WikiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 4.5c2-1 5-1 7 0v15c-2-1-5-1-7 0v-15Z" />
      <path d="M20 4.5c-2-1-5-1-7 0v15c2-1 5-1 7 0v-15Z" />
    </Base>
  )
}

export function PdfPrivacyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M6 3h8l4 4v6" />
      <path d="M14 3v4h4" />
      <rect x="4" y="14" width="8" height="7" rx="1.5" />
      <path d="M6 14v-1.5a2 2 0 1 1 4 0V14" />
    </Base>
  )
}

export function DiagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="6" height="4" rx="1" />
      <rect x="15" y="4" width="6" height="4" rx="1" />
      <rect x="9" y="16" width="6" height="4" rx="1" />
      <path d="M6 8v4h12V8" />
      <path d="M12 12v4" />
    </Base>
  )
}

export function SketchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 20c3-1 4-3 5-6l7-7 3 3-7 7c-3 1-5 2-6 5l-2-2Z" />
      <path d="M14 5.5 18.5 10" />
    </Base>
  )
}

export function SurveyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M9 8h6M9 12h6M9 16h3" />
      <path d="M7.5 8h.01M7.5 12h.01M7.5 16h.01" />
    </Base>
  )
}

export function PackageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4" />
      <path d="M12 11v10" />
    </Base>
  )
}

export function NetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="4.5" r="1.8" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path d="M12 6.3 5.9 16.4M12 6.3l6.1 10.1M6.7 18h10.6" />
    </Base>
  )
}

export function SpeedGaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15 16 9" />
      <path d="M12 15h.01" />
    </Base>
  )
}

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 13 4.5a3.5 3.5 0 0 1 5 5l-2 2" />
      <path d="M13 17.5 11 19.5a3.5 3.5 0 0 1-5-5l2-2" />
    </Base>
  )
}

export function QrCodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="6" height="6" rx="0.5" />
      <rect x="14.5" y="3.5" width="6" height="6" rx="0.5" />
      <rect x="3.5" y="14.5" width="6" height="6" rx="0.5" />
      <path d="M6 6h1M6 17h1M17 6h1" />
      <path d="M14.5 14.5h2.5v2.5h-2.5zM20 14.5v2M14.5 20h2.5v.01M20 20v.01" />
    </Base>
  )
}

export function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="4" y="10" width="16" height="10" rx="1" />
      <path d="M4 10h16" />
      <path d="M12 10v10" />
      <circle cx="9.5" cy="7" r="2" />
      <circle cx="14.5" cy="7" r="2" />
    </Base>
  )
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <path d="M3 20c0-3.6 2.5-6.2 5.5-6.2S14 16.4 14 20" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15 13.3c2.4.4 4 2.6 4 6.7" />
    </Base>
  )
}

export function CollaborationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="9" cy="12" r="6.5" />
      <circle cx="15" cy="12" r="6.5" />
    </Base>
  )
}

export function WebHostingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="5" y="9" width="14" height="10" rx="1.5" />
      <path d="M8 13h.01M8 16h.01" />
      <path d="M9 6c1.5-1.5 4.5-1.5 6 0M7 4c3-3 7-3 10 0" />
    </Base>
  )
}

export function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </Base>
  )
}

export function DashboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M7 15v-4M12 15V8M17 15v-7" />
    </Base>
  )
}

export function KanbanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3.5" y="4" width="5" height="16" rx="1" />
      <rect x="9.5" y="4" width="5" height="10" rx="1" />
      <rect x="15.5" y="4" width="5" height="13" rx="1" />
    </Base>
  )
}

export function GitBranchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 8v8" />
      <path d="M8 18h8a4 4 0 0 0 4-4v-2" />
    </Base>
  )
}

export function AutomationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
    </Base>
  )
}

export function WorkflowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 6h4a4 4 0 0 1 4 4v0M7 18h4a4 4 0 0 0 4-4v0" />
      <path d="M15 10l2 2-2 2" />
    </Base>
  )
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M9 6 4 12l5 6" />
      <path d="M15 6l5 6-5 6" />
    </Base>
  )
}

export function RemoteDesktopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
      <path d="M14 9l3 2-3 2" />
    </Base>
  )
}

export function LabNetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <rect x="3" y="14" width="6" height="4" rx="1" />
      <rect x="15" y="14" width="6" height="4" rx="1" />
      <path d="M12 7v4M12 11 6 14M12 11l6 3" />
    </Base>
  )
}

export function VmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="10" height="7" rx="1" />
      <rect x="11" y="13" width="10" height="7" rx="1" />
      <path d="M6 11v2M18 11v2" />
    </Base>
  )
}

export function ServerStackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="4" y="4" width="16" height="4.5" rx="1" />
      <rect x="4" y="10" width="16" height="4.5" rx="1" />
      <rect x="4" y="16" width="16" height="4.5" rx="1" />
      <path d="M7 6.25h.01M7 12.25h.01M7 18.25h.01" />
    </Base>
  )
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" />
      <path d="M9.5 12l2 2 3-4" />
    </Base>
  )
}

export function WifiManagementIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 9a12 12 0 0 1 16 0" />
      <path d="M7 12.5a7.5 7.5 0 0 1 10 0" />
      <path d="M10 16a3 3 0 0 1 4 0" />
      <path d="M12 19h.01" />
    </Base>
  )
}

export function LogsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
      <path d="M7 9h2l1.5 3L12 8l1.5 3H17" />
    </Base>
  )
}

export function CameraStorageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4 8a1 1 0 0 1 1-1h2l1.2-2h7.6L17 7h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Z" />
      <circle cx="12" cy="13" r="3.2" />
    </Base>
  )
}

export function ObjectStorageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M5 5h14l-1.5 14a1.5 1.5 0 0 1-1.5 1.3H8a1.5 1.5 0 0 1-1.5-1.3L5 5Z" />
      <path d="M3.5 5h17" />
      <path d="M9.5 9v7M14.5 9v7" />
    </Base>
  )
}

export function BackupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M7 16a4 4 0 0 1 .3-7.97A5.5 5.5 0 0 1 18 9.5 3.5 3.5 0 0 1 17.5 16H7Z" />
      <path d="M12 10v7M9.5 14.5 12 17l2.5-2.5" />
    </Base>
  )
}
