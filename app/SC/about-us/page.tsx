const team = [
  {
    name: "林權緯 博士（Dr. Kevin Lin）",
    role: "首席执行官 & 首席技术官",
    email: "qwlin@metabee.com.hk",
    bio: "计算电磁学专家，负责天线设计、智能可重构超表面（RIS）及射频集成的整体技术方向。",
  },
  {
    name: "吳公保 博士（Dr. Aaron NG KUNG BO）",
    role: "顾问，射频与系统集成",
    email: "aaronng@metabee.com.hk",
    bio: "资深无线通信工程师，确保产品在复杂实际环境中的射频性能与合规性。",
  },
  {
    name: "莫肇怡 女士（Miss Noyes Mok）",
    role: "技术主管",
    email: "noyesmok@metabee.com.hk",
    bio: "负责产品开发与制造执行；数字信号处理专家，拥有逾20年行业经验。",
  },
  {
    name: "黃衡 教授（Prof. Hang Wong）",
    role: "首席科学顾问（非执行）",
    bio: "香港城市大学太赫兹与毫米波国家重点实验室；多功能腔体天线与元像素发明人。",
  },
];

export default function AboutUsSC() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">关于我们</h1>
          <p className="text-xl text-zinc-400">
            云峰科技有限公司（MetaBee Technology Limited）是一家总部位于香港的科技企业，专注于低空经济基础设施和无人机自主控制系统。
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">企业使命</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            云峰科技致力于提供端到端低空空域解决方案，并开发绿色创新技术以实现无人机自主运营——让运营商从单机作业无缝扩展至城市级低空无线网络（LAWN），无需更换服务商。我们专注于AI驱动导航、天地一体混合通信以及通感一体化技术，满足大湾区及更广泛市场客户的特定需求。
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10">管理团队</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[#f0b429] text-sm font-medium mb-2">{member.role}</p>
                {member.email ? (
                  <p className="text-sm mb-2">
                    <a href={`mailto:${member.email}`} className="text-zinc-300 hover:text-[#f0b429] transition-colors">{member.email}</a>
                  </p>
                ) : null}
                <p className="text-zinc-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
