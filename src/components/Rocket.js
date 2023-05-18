import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import React from "react";
import { useDispatch } from "react-redux";
import { reserveRocket, cancelReserve } from "../redux/rockets/rocketSlice";

const Rocket = ({ id, name, description, img, type, reserved }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex m-8">
      <div className="w-72">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${img}`} alt={name} />
        </Card>
      </div>

      <div className="flex-auto mx-5">
        <Card.Body>
          <Card.Title className="font-bold">{name}</Card.Title>
          <div className="mt-3 ">
            {reserved && (
              <div>
                {description}

                <Button
                  className="block p-2 mt-3 rounded-md border border-black border-opacity-40 bg-white text-black text-opacity-50"
                  onClick={() => dispatch(cancelReserve(id))}
                >
                  Cancel Reservation
                </Button>
              </div>
            )}

            {!reserved && (
              <div>
                <div>{description}</div>
                <Button
                  className="p-2 mt-3 rounded-md bg-blue-500 text-white"
                  onClick={() => dispatch(reserveRocket(id))}
                >
                  Reserve Rocket
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </div>
    </div>
  );
};

export default Rocket;
