export default function MediaObject(props) {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <div className="h-10 w-10   text-gray-300">{props.icon}</div>
      </div>
      <div>
        <h4 className="text-base font-bold text-[white] ">{props.heading}</h4>
        <p className="mt-1 text-[gray] text-sm">{props.des}</p>
      </div>
    </div>
  );
}
