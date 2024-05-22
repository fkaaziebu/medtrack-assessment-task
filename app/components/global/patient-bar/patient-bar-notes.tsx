interface PatientBarNotesProps {
  notes: any;
}
export const PatientBarNotes = (props: PatientBarNotesProps) => {
  // @ts-ignore
  const renderElements = (elements) => {
    // @ts-ignore
    return elements.children.map((element, index) => {
      if (element.type === undefined) {
        return <p key={index}>{element.text}</p>;
      } else if (element.type === 'list-item') {
        return (
          <ul
            style={{
              listStyle: 'disc inside',
            }}
            key={index}
            className='ml-2'
          >
            {
              // @ts-ignore
              element.children.map((item, itemIndex) => (
                <li key={itemIndex}>{item.text}</li>
              ))
            }
          </ul>
        );
      }
      return null;
    });
  };

  return (
    <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
      <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
        <h2 className='text-sm text-[#7a7d7f]'>Notes</h2>
      </div>
      <div className='flex items-center justify-center px-4 py-4'>
        {props.notes !== undefined ? (
          <div className='flex w-full flex-col items-start justify-center gap-1 rounded-md py-6'>
            {JSON.parse(props.notes).map(
              // @ts-ignore
              (section, index) => (
                <div key={index}>{renderElements(section)}</div>
              )
            )}
          </div>
        ) : null}
      </div>
      <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
        <span className='text-sm text-[#7a7d7f]'>2ND JAN 2024</span>
        <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
        <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
      </div>
    </div>
  );
};
