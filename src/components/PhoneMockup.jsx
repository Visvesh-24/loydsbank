/** Pure-CSS phone showing a mock banking app — used in heroes & app sections. */
export default function PhoneMockup({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[230px] rounded-[2.4rem] border-[10px] border-charcoal bg-charcoal shadow-lift">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-charcoal" />
        <div className="overflow-hidden rounded-[1.7rem] bg-mint-pale">
          {/* app header */}
          <div className="bg-forest px-4 pb-6 pt-7 text-white">
            <p className="text-[11px] text-white/70">Good morning,</p>
            <p className="font-display text-lg font-bold">Alex</p>
            <div className="mt-3 rounded-2xl bg-white/10 p-3 backdrop-blur">
              <p className="text-[10px] text-white/70">Current account</p>
              <p className="font-display text-2xl font-extrabold">£4,820.50</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-2/3 rounded-full bg-lime" />
              </div>
            </div>
          </div>
          {/* quick actions */}
          <div className="grid grid-cols-3 gap-2 px-4 py-4">
            {["Pay", "Move", "Save"].map((a) => (
              <div key={a} className="rounded-xl bg-white py-2.5 text-center shadow-sm">
                <div className="mx-auto mb-1 h-5 w-5 rounded-full bg-mint" />
                <span className="text-[10px] font-semibold text-charcoal">{a}</span>
              </div>
            ))}
          </div>
          {/* tx list */}
          <div className="space-y-2 px-4 pb-5">
            {[
              ["Coffee Loop", "-£3.40"],
              ["Salary", "+£2,400"],
              ["Loyds Saver", "-£150"],
            ].map(([n, v]) => (
              <div key={n} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-mint" />
                  <span className="text-[11px] font-medium text-charcoal">{n}</span>
                </div>
                <span className={`text-[11px] font-bold ${v.startsWith("+") ? "text-emerald2" : "text-charcoal/70"}`}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
