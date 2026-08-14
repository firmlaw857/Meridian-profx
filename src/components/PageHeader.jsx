export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h1 className="font-display text-xl font-bold text-white">{title}</h1>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
  )
}
