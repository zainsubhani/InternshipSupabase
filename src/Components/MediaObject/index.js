/* This example requires Tailwind CSS v2.0+ */
export default function MediaObject() {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <svg
          className="h-10 w-10 border border-gray-300 bg-white text-gray-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth={1}
            d="M0 0l200 200M0 200L200 0"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-base font-bold ">Lorem ipsum</h4>
        <p className="mt-1 text-sm">
          Repudiandae sint consequuntur vel. Amet ut numquam expedita
          voluptatem.
        </p>
      </div>
    </div>
  );
}
