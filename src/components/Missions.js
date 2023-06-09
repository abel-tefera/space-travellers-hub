import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  getMissionsError,
  getMissionsStatus,
  joinMission,
  leaveMission,
  selectAllMissions,
} from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();

  const MissionData = useSelector(selectAllMissions);
  const status = useSelector(getMissionsStatus);
  const error = useSelector(getMissionsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <>
      <div className="container flex flex-col">
        <div className="overflow-x-scroll">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-bold uppercase text-start w-1/6"
                    >
                      Mission
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-bold text-start uppercase w-1/2 "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-bold text-start uppercase "
                    >
                      Status
                    </th>
                    <th
                      className="p-4 text-xs font-bold text-start uppercase "
                      scope="col"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {MissionData.map(
                    ({
                      mission_id, mission_name, description, status,
                    }) => (
                      <tr key={mission_id}>
                        <td className="p-4 text-sm text-gray-800 font-bold">
                          {mission_name}
                        </td>
                        <td className="p-4 text-sm text-gray-800 text-justify">
                          {description}
                        </td>
                        <td className="p-4 text-sm font-medium ">
                          <div
                            className={
                              status
                                ? 'capitalize bg-cyan-500 text-white p-1 rounded w-fit'
                                : 'bg-gray-500 uppercase text-white p-1 rounded w-fit'
                            }
                            href="#"
                          >
                            {status ? 'Active Member' : 'Not a member'}
                          </div>
                        </td>
                        <td className="text-sm font-medium ">
                          <button
                            type="button"
                            onClick={
                              status
                                ? () => dispatch(leaveMission(mission_id))
                                : () => dispatch(joinMission(mission_id))
                            }
                            className={
                              status
                                ? 'text-red-500 outline-red-500  outline p-2 cursor-pointer w-fit'
                                : 'text-gray-500 outline-gray-500  outline p-2 cursor-pointer w-fit'
                            }
                            href="#"
                          >
                            {status ? 'Leave Mission' : 'Join Mission'}
                          </button>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Missions;
