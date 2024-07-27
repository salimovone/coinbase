import React from "react";
import style from './style.module.css'

const Table = () => {
  return (
    <div className="w-full border-[2px] py-8 px-16 rounded-xl text-col-prim bg-white">
      <p><b>Conversion rate to Nigeria</b></p>
      <table className="w-full text-left mt-5 text-xs *:*:p-2">

        {/* keyinchalik dataga qarab map aylantiriladi */}
        <tr>
            <th className={style.th}>Itunes cards</th>
            <th></th>
            <th className={style.th}>Amazon cards</th>
            <th></th>
            <th className={style.th}>Bitcoin</th>
            <th></th>
        </tr>
        <tr>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
        </tr>
        <tr>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
        </tr>
        <tr>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
        </tr>
        <tr>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
            <td>USA Physical</td>
            <td>N400.00</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
