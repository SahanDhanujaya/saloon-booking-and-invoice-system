type CommonPageProps = {
  badge?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const CommonPage = ({
  badge,
  title,
  description,
  children,
}: CommonPageProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">
        {badge && (
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
            {badge}
          </span>
        )}

        <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
          {description}
        </p>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
};

export default CommonPage;