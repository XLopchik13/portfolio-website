const EXPERIENCE = [
	{
		company: "Chad AI",
		role: "Full Stack Developer",
		period: "2025 — present",
	},
	{
		company: "CIMO",
		role: "Backend Developer",
		period: "2024 — 2025",
	},
] as const;

export const ExperienceTable = () => (
	<div className="mt-8">
		<p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
			Experience
		</p>
		<table className="w-full text-sm border-collapse">
			<thead>
				<tr className="border-b border-border">
					<th className="text-left py-2 pr-4 font-medium text-muted">
						Company
					</th>
					<th className="text-left py-2 pr-4 font-medium text-muted">Role</th>
					<th className="text-left py-2 font-medium text-muted">Period</th>
				</tr>
			</thead>
			<tbody>
				{EXPERIENCE.map((row) => {
					const isCurrent = row.period.includes("present");
					return (
						<tr
							key={row.company}
							className="border-b border-border last:border-0"
						>
							<td className="py-2.5 pr-4 font-medium text-text">
								{row.company}
							</td>
							<td className="py-2.5 pr-4 text-muted">{row.role}</td>
							<td className="py-2.5 text-muted">
								<div className="flex items-center gap-2">
									{row.period}
									{isCurrent && (
										<span
											className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"
											aria-label="Current position"
										/>
									)}
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	</div>
);
