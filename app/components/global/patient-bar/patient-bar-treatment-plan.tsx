interface PatientBarTreatmentPlanProps {
  treatmentPlan: any;
}
export const PatientBarTreatmentPlan = (
  props: PatientBarTreatmentPlanProps
) => {
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
        <h2 className='text-sm text-[#7a7d7f]'>Physician Treatment Plan</h2>
      </div>
      {props.treatmentPlan !== undefined ? (
        <div className='flex items-center justify-center px-4 py-4'>
          {JSON.parse(props?.treatmentPlan).map(
            // @ts-ignore
            (section, index) => (
              <div key={index} className='flex flex-col gap-3'>
                <p className='text-sm'>{renderElements(section)}</p>
              </div>
            )
          )}
        </div>
      ) : null}
      <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
        <span className='text-sm text-[#7a7d7f]'>2ND JAN 2024</span>
        <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
        <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
      </div>
    </div>
  );
};
