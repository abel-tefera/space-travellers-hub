import React from 'react';
import MissionData from '../data/sample';

const Missions = () => (
  <>
    <div className="container flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="p-4 text-xs font-bold uppercase text-start"
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
                  <th scope="col" />
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
                      <td className="p-4 text-sm text-gray-800">
                        {description}
                      </td>
                      <td className="p-4 text-sm font-medium ">
                        <a
                          className={
                            status
                              ? 'capitalize bg-cyan-500 text-white p-1 rounded'
                              : 'bg-gray-500 uppercase text-white p-1 rounded'
                          }
                          href="#"
                        >
                          {status ? 'Active Member' : 'Not a member'}
                        </a>
                      </td>
                      <td className="text-sm font-medium ">
                        <a
                          className={
                            status
                              ? 'text-red-500 outline-red-500  outline p-2'
                              : 'text-gray-500 outline-gray-500  outline p-2'
                          }
                          href="#"
                        >
                          {status ? 'Leave Mission' : 'Join Mission'}
                        </a>
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

export default Missions;
