'use client';
import Image from 'next/image';
import CarePlanIcon from '@/public/ic-careplan.svg';
import ChevronDownIcon from '@/public/ic-chevron-down.svg';
import HistoryIcon from '@/public/ic-HE-Findings.svg';
import MedicationIcon from '@/public/ic-pill_1ic-pill.png';
import DiagnosticsIcon from '@/public/ic-labs.svg';
import VitalsIcon from '@/public/ic-activity.svg';

import PatientAvatar from '@/public/avatar_patient_default.png';

import { useState } from 'react';
import { useModal } from '@/app/hooks/use-modal-store';
import { motion } from 'framer-motion';

interface PatientReviewProp {
  review: any;
}

export default function PatientReview(props: PatientReviewProp) {
  const [expand, setExpand] = useState(false);
  const { onOpen } = useModal();

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
    <motion.div
      layout
      className='grid grid-cols-1 overflow-hidden rounded-lg border border-[#d0d5e2] bg-white md:grid-cols-5'
    >
      <motion.div
        style={{
          backgroundImage:
            'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
          backgroundPosition: '0 0, 0 0',
          backgroundSize: 'auto, 240px',
        }}
        className='col-span-1 hidden border-r border-[#d0d5e2] bg-contain py-4 md:block lg:px-2 xl:px-4'
        layout
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <h2 className='text-sm text-[#7a7d7f]'>Review generated at</h2>
            <span className='text-base font-medium'>7:30 PM</span>
          </div>
          <div>
            <button type='button' onClick={() => setExpand(!expand)}>
              <div className='flex items-center gap-4 rounded-md border border-[#d0d5e2] bg-white px-1.5 py-0.5 text-[#7a7d7f] hover:text-[#58595a]'>
                <span className='text-sm'>Expand</span>
                <Image
                  src={ChevronDownIcon}
                  alt='Chevron Down'
                  className='h-4 w-4'
                />
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        layout
        className='col-span-1 flex items-start justify-start px-4 py-4 md:col-span-2'
      >
        <div className=' flex items-center gap-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full border border-[#d0d5e2]'>
            <Image
              src={CarePlanIcon}
              alt='Care Plan'
              className='h-4 w-4 text-[#7a7d7f]'
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-lg font-medium'>{props.review.title}</h2>
            <span className='text-[#7a7d7f]'>8th May 2024</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        layout
        className='col-span-1 flex flex-col justify-start  gap-3 px-4 py-4 text-xs text-[#7a7d7f] md:items-end'
      >
        <div className='flex items-center gap-2'>
          <h3>Last updated</h3>
          <span className='rounded-md bg-[#d0f3e4] px-1 py-0.5 text-[#044b2d]'>
            Ongoing
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <h3>Updated by</h3>
          <span className='rounded-md border border-[#d0d5e2] p-1'>Sandra</span>
        </div>
      </motion.div>

      <motion.div
        className='col-span-1 flex items-start px-4  py-4 md:justify-end'
        layout
      >
        <button
          onClick={async () => {
            onOpen('medicationDetectionModal');
          }}
          className='flex w-full items-center justify-center rounded-md bg-[#3952a6] px-3.5 py-2 text-white shadow-xl hover:bg-[#1d368b] md:w-auto'
        >
          <span className='text-sm'>Continue</span>
        </button>
      </motion.div>

      <motion.div
        style={{
          backgroundImage:
            'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
          backgroundPosition: '0 0, 0 0',
          backgroundSize: 'auto, 240px',
        }}
        className='col-span-1 block border-r border-[#d0d5e2] bg-contain px-4 py-4 md:hidden'
        layout
      >
        <div className='flex justify-between gap-4'>
          <div className='flex flex-col'>
            <h2 className='text-sm text-[#7a7d7f]'>Review generated at</h2>
            <span className='text-base font-medium'>7:30 PM</span>
          </div>
          <div>
            <button type='button' onClick={() => setExpand(!expand)}>
              <div className='flex items-center gap-4 rounded-md border border-[#d0d5e2] bg-white px-1.5 py-0.5 text-[#7a7d7f] hover:text-[#58595a]'>
                <span className='text-sm'>Expand</span>
                <Image
                  src={ChevronDownIcon}
                  alt='Chevron Down'
                  className='h-4 w-4'
                />
              </div>
            </button>
          </div>
        </div>
      </motion.div>
      {expand && (
        <motion.div
          layout
          className='col-span-1 grid grid-cols-subgrid  border-t border-[#d0d5e2] md:col-span-5'
        >
          <div className='col-span-1 hidden lg:block xl:hidden'></div>
          <div className='col-span-1 lg:col-span-2 xl:col-span-1'>
            <div className='flex h-full w-full flex-col border-r border-t-2 border-r-[#d0d5e2] border-t-white'>
              <div className='h-12 w-full border-b border-b-[#f1f3f7] bg-white'></div>
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
                  backgroundPosition: '0 0, 0 0',
                  backgroundSize: 'auto, 240px',
                }}
                className='h-80 overflow-y-hidden'
              >
                <div className='flex flex-col gap-1 px-3 py-4 text-xs text-[#7a7d7f]'>
                  <h3>Team</h3>
                  <div className='flex items-center gap-1'>
                    <Image
                      src={PatientAvatar}
                      alt='Patient Avatar'
                      className='h-5 w-5 rounded-full border border-[#d0d5e2] pt-0.5 text-[#3952a6]'
                    />
                    <span>Adam Newman</span>
                    <span className='rounded-md border border-[#d0d5e2] px-0.5'>
                      MD
                    </span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Image
                      src={PatientAvatar}
                      alt='Patient Avatar'
                      className='h-5 w-5 rounded-full border border-[#d0d5e2] pt-0.5 text-[#3952a6]'
                    />
                    <span>Sandra Riley</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-2 xl:col-span-1'>
            <div className='flex h-full w-full flex-col border-r border-t-2 border-r-[#d0d5e2] border-t-[#0428db]'>
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(to top, rgba(241, 243, 247, .2) 50%, #f6f8fb)',
                }}
                className='flex h-12 w-full items-center gap-2 border-b border-b-[#f1f3f7] bg-white pl-2'
              >
                <Image
                  src={HistoryIcon}
                  alt='History and Exams'
                  className='h-5 w-5 text-[#7a7d7f]'
                />
                <h3 className='text-xs text-[#7a7d7f]'>
                  History & Exams Notes
                </h3>
              </div>
              <div className='relative h-80 overflow-y-hidden'>
                <div className='no-scrollbar h-full overflow-y-auto px-1.5 pb-20 pt-3'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center'>
                        <div className='h-3.5 w-0.5  bg-[#7a4a02]' />
                        <span className='w-full truncate rounded-md bg-[#fffaeb] px-1 text-sm text-[#7a4a02]'>
                          Examination Notes
                        </span>
                      </div>
                      <div className='flex flex-col gap-3'>
                        {JSON.parse(props.review.clinicalSummary).map(
                          // @ts-ignore
                          (section, index) => (
                            <div key={index}>{renderElements(section)}</div>
                          )
                        )}
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center'>
                        <div className='h-3.5 w-0.5  bg-[#5934b1]' />
                        <span className='w-full truncate rounded-md bg-[#f9f5ff] px-1 text-sm text-[#5934b1]'>
                          Diagnosis
                        </span>
                      </div>
                      {props.review.diagnosis.map(
                        // @ts-ignore
                        (diagnosis, diagnosisIndex) => (
                          <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2 border-b border-[#d0d5e2] pb-2 last:border-none'>
                              <h4 className='text-sm'>{diagnosis.fullName}</h4>
                              <div className='flex items-center gap-2'>
                                <span className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs '>
                                  ICD
                                </span>
                                <span className='text-sm'>
                                  {diagnosis.fullCode}
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center'>
                        <div className='h-3.5 w-0.5  bg-[#5934b1]' />
                        <span className='w-full truncate rounded-md bg-[#edf6f0] px-1 text-sm text-[#02683d]'>
                          Physician Treatment Plan
                        </span>
                      </div>
                      {JSON.parse(props.review.treatmentPlan).map(
                        // @ts-ignore
                        (section, index) => (
                          <div key={index} className='flex flex-col gap-3'>
                            <p className='text-sm'>{renderElements(section)}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255, 245, 245, 0), var(--bkg) 50%)',
                  }}
                  className='absolute bottom-0 flex h-24 w-full px-2 pb-1.5'
                >
                  <div className='mt-auto flex w-full items-center justify-between px-1.5'>
                    <span className='truncate text-sm text-[#182430] md:hidden 2xl:inline'>
                      Expand summary
                    </span>
                    <button
                      onClick={() => onOpen('summary')}
                      type='button'
                      className='truncate rounded-md bg-[#3952a6] px-2 py-1 text-xs text-white hover:bg-[#1d368b]'
                    >
                      Expand
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1 hidden lg:block xl:hidden'></div>
          <div className='col-span-1 lg:col-span-2 xl:col-span-1'>
            <div className='flex h-full w-full flex-col border-r border-t-2 border-r-[#d0d5e2] border-t-[#00b066]'>
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(to top, rgba(241, 243, 247, .2) 50%, #f6f8fb)',
                }}
                className='flex h-12 w-full items-center gap-2 border-b border-b-[#f1f3f7] bg-white pl-2'
              >
                <Image
                  src={MedicationIcon}
                  alt='Medication'
                  className='h-5 w-5 text-[#7a7d7f]'
                />
                <h3 className='text-xs text-[#7a7d7f]'>Medications</h3>
              </div>
              <div className='relative h-80 overflow-y-hidden'>
                <div className='no-scrollbar h-full overflow-y-auto px-1.5 pb-20 pt-3'>
                  <div className='flex flex-col gap-2'>
                    {
                      // @ts-ignore
                      props.review.prescriptions.map((prescription) => {
                        return (
                          <div
                            key={prescription.id}
                            className='flex flex-col gap-2 rounded-md border border-[#d0d5e2] p-1.5'
                          >
                            {
                              // @ts-ignore
                              prescription.items.map((prescriptionItem) => (
                                <>
                                  <h1 className='truncate text-xs font-medium'>
                                    {prescriptionItem.name}
                                  </h1>
                                  <div className='flex items-center rounded-md bg-[#f6f8fb] p-1.5'>
                                    <p className='text-sm'>
                                      <span className='text-[#027a48]'>
                                        {
                                          prescriptionItem
                                            .doctorPrescriptionItemDosage
                                            .quantity
                                        }{' '}
                                        {
                                          prescriptionItem
                                            .doctorPrescriptionItemDosage
                                            .quantityUnit
                                        }{' '}
                                      </span>{' '}
                                      <span className='text-[#6941c6]'>
                                        {
                                          prescriptionItem
                                            .doctorPrescriptionItemDosage.route
                                        }{' '}
                                      </span>{' '}
                                      <span className='text-[#b42318]'>
                                        {
                                          prescriptionItem
                                            .doctorPrescriptionItemDosage
                                            .frequency
                                        }
                                      </span>{' '}
                                      <span className='text-[#b54708]'>
                                        {
                                          prescriptionItem
                                            .doctorPrescriptionItemDosage
                                            .duration
                                        }{' '}
                                        {
                                          prescriptionItem
                                            .doctorPrescriptionItemDosage
                                            .durationUnit
                                        }
                                      </span>
                                    </p>
                                  </div>
                                </>
                              ))
                            }
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255, 245, 245, 0), var(--bkg) 50%)',
                  }}
                  className='absolute bottom-0 flex h-24 w-full px-2 pb-1.5'
                >
                  <div className='mt-auto flex w-full items-center justify-between px-1.5'>
                    <span className='truncate text-sm text-[#182430] md:hidden 2xl:inline'>
                      View details
                    </span>
                    <button
                      onClick={() => onOpen('medication')}
                      type='button'
                      className='truncate rounded-md bg-[#3952a6] px-2 py-1 text-xs text-white hover:bg-[#1d368b]'
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-2 xl:col-span-1'>
            <div className='flex h-full w-full flex-col border-r border-t-2 border-r-[#d0d5e2] border-t-[#e45151]'>
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(to top, rgba(241, 243, 247, .2) 50%, #f6f8fb)',
                }}
                className='flex h-12 w-full items-center gap-2 border-b border-b-[#f1f3f7] bg-white pl-2'
              >
                <Image
                  src={DiagnosticsIcon}
                  alt='Diagnostics'
                  className='h-5 w-5 text-[#7a7d7f]'
                />
                <h3 className='text-xs text-[#7a7d7f]'>Diagnostics</h3>
              </div>
              <div className='relative h-80 overflow-y-hidden'>
                <div className='no-scrollbar h-full overflow-y-auto px-1.5 pb-20 pt-3'>
                  <div className='flex flex-wrap items-start gap-2'>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                      <span className='text-xs text-[#182430]'>FBC</span>
                    </div>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                      <span className='text-xs text-[#182430]'>
                        Lorem ipsum
                      </span>
                    </div>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                      <span className='text-xs text-[#182430]'>Lorem PI</span>
                    </div>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                      <span className='text-xs text-[#182430]'>BPL</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255, 245, 245, 0), var(--bkg) 50%)',
                  }}
                  className='absolute bottom-0 flex h-24 w-full px-2 pb-1.5'
                >
                  <div className='mt-auto flex w-full items-center justify-between px-1.5'>
                    <span className='truncate text-sm text-[#182430] md:hidden 2xl:inline'>
                      View reports
                    </span>
                    <button
                      onClick={() => onOpen('diagnostic')}
                      type='button'
                      className='truncate rounded-md bg-[#3952a6] px-2 py-1 text-xs text-white hover:bg-[#1d368b]'
                    >
                      Open
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1 hidden lg:block xl:hidden'></div>
          <div className='col-span-1 lg:col-span-2 xl:col-span-1'>
            <div className='flex h-full w-[98%] flex-col border-r border-t-2 border-r-[#d0d5e2] border-t-[#dbad04]'>
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(to top, rgba(241, 243, 247, .2) 50%, #f6f8fb)',
                }}
                className='flex h-12 w-full items-center gap-2 border-b border-b-[#f1f3f7] bg-white pl-2'
              >
                <Image
                  src={VitalsIcon}
                  alt='Vitals'
                  className='h-5 w-5 text-[#7a7d7f]'
                />
                <h3 className='text-xs text-[#7a7d7f]'>Vitals</h3>
              </div>
              <div className='relative h-80 overflow-y-hidden'>
                <div className='no-scrollbar h-full overflow-y-auto px-1.5 pb-20 pt-3'>
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center'>
                      {/* <div className='h-3.5 w-0.5  bg-[#7a4a02]' /> */}
                      <span className='ml-1 truncate text-sm text-[#7a4a02]'>
                        Current
                      </span>
                    </div>
                    <div className='flex flex-wrap items-start gap-3'>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>FBS</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-xs text-[#182430]'>
                            32 <span className=' text-[#7a7d7f]'>C</span>
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>FBS</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-xs text-[#182430]'>
                            98 <span className=' text-[#7a7d7f]'>BPM</span>
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>Blood Pressure</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2]'>
                          <span className='border-r border-r-[#d0d5e2] px-2.5 py-1.5 text-xs text-[#182430]'>
                            120 <span className='text-[#7a7d7f]'>Sys</span>
                          </span>
                          <span className='px-2.5 py-1.5 text-xs text-[#182430]'>
                            90 <span className='text-[#7a7d7f]'>Dia</span>
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>Weight</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-xs text-[#182430]'>
                            72 <span className=' text-[#7a7d7f]'>Kg</span>
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>SpO2</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-xs text-[#182430]'>
                            98 <span className=' text-[#7a7d7f]'>%</span>
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>Height</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-xs text-[#182430]'>
                            170 <span className=' text-[#7a7d7f]'>cm</span>
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <h4 className='text-xs'>FBS</h4>
                        <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-xs text-[#182430]'>
                            5.5 <span className=' text-[#7a7d7f]'>mmol/L</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255, 245, 245, 0), var(--bkg) 50%)',
                  }}
                  className='absolute bottom-0 flex h-24 w-full px-2 pb-1.5'
                >
                  <div className='mt-auto flex w-full items-center justify-between px-1.5'>
                    <span className='truncate text-sm text-[#182430] md:hidden 2xl:inline'>
                      4 more records
                    </span>
                    <button
                      onClick={() => onOpen('vitals')}
                      type='button'
                      className='truncate rounded-md bg-[#3952a6] px-2 py-1 text-xs text-white hover:bg-[#1d368b]'
                    >
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
