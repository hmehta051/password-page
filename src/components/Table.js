import React from "react";
import "../styles/Body.css";
import { ReactComponent as DeleteIcon } from "../assets/svg/Delete Icon.svg";
import { ReactComponent as Disney } from "../assets/svg/Disney.svg";
import { ReactComponent as IMDb } from "../assets/svg/Imdb.svg";
import { ReactComponent as Netflix } from "../assets/svg/Netflix.svg";
const Table = () => {
  return (
    <table>
      <thead>
        <tr className="trHead">
          <th>
            <div className="checkHeder">
              <input type="checkbox" id="checkboxAll" />
              <label for="checkboxAll">Account</label>
            </div>
          </th>
          <th>Username</th>
          <th>Created on</th>
          <th>Action items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="checkHeder">
              <input type="checkbox" id="checkboxAll" />
              <label for="checkboxAll">
                <IMDb />
                <span>IMDb</span>
              </label>
            </div>
          </td>
          <td>markjonathan@gmail.com</td>
          <td>05 Apr 2023</td>
          <td>
            <div className="deleteIcon">
              <DeleteIcon />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="checkHeder">
              <input type="checkbox" id="checkboxAll" />
              <label for="checkboxAll">
                <Netflix />
                <span>Netflix</span>
              </label>
            </div>
          </td>
          <td>georgehenry@gmail.com</td>
          <td>04 Apr 2023</td>
          <td>
            <div className="deleteIcon">
              <DeleteIcon />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="checkHeder">
              <input type="checkbox" id="checkboxAll" />
              <label for="checkboxAll">
                <Disney />
                <span>Disney</span>
              </label>
            </div>
          </td>
          <td>daniellee@gmail.com</td>
          <td>03 Apr 2023</td>
          <td>
            <div className="deleteIcon">
              <DeleteIcon />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
