type SectionHeadingProps = {
	children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
	return (
		<section className="grid grid-rows-1 gap-[18px] px-6 pt-20 text-center sm:mx-auto sm:max-w-[520px] lg:gap-6 xl:max-w-none xl:grid-cols-[auto_495px] xl:place-items-end xl:gap-0 xl:px-0 xl:pt-[8rem] xl:text-left">
			{children}
		</section>
	);
};

export default SectionHeading;
