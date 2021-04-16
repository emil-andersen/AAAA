import React from "react";
import "./Key.scss"


function Key(){
    return(
      <>
    <div id="Key" className="Key">
          <h1 className="Key__h1">Keybindings</h1>

      <div className="Key__table">
          <table>
          <tr>
            
            </tr>
              <tr>
                <td>F1 - </td>
                <td>Telefon</td>
              </tr>
              <tr>
                <td>F2 - </td>
                <td>Taske</td>
              </tr>
              <tr>
                <td>F3 - </td>
                <td>Emotemenu</td>
              </tr>
              <tr>
                <td>F5 - </td>
                <td>Bagagerum</td>
              </tr>
              <tr>
                <td>F6 - </td>
                <td>Jobmenu</td>
              </tr>
              <tr>
                <td>F7 - </td>
                <td>Regninger</td>
              </tr>
              <tr>
                <td>F10 - </td>
                <td>Panikknap</td>
              </tr>
              <tr>
                <td>B - </td>
                <td>Sele</td>
              </tr>
              <tr>
                <td>Y - </td>
                <td>Tøjmenu</td>
              </tr>
          </table>
        </div>


        <h1 className="Key__h1">Commands</h1>
        <div className="Key__table">
        <table>
          <tr>
            
            </tr>
              <tr>
                <td>/mdt - </td>
                <td>Politiets MDT ( Kun Politiet )</td>
              </tr>
              <tr>
                <td>/skin - </td>
                <td>Tøjmenu</td>
              </tr>
              <tr>
                <td>/coords - </td>
                <td>Se coords</td>
              </tr>
              <tr>
                <td>/kørestol - </td>
                <td>Løfter kørestol</td>
              </tr>
              <tr>
                <td>/fkørestol - </td>
                <td>Fjerner kørestol</td>
              </tr>
              <tr>
                <td>/s - </td>
                <td>Staff-chat ( Kun Staffs )</td>
              </tr>
              <tr>
                <td>/r - </td>
                <td>Skriv til bestemt spiller ( Kun Staffs )</td>
              </tr>
              <tr>
                <td>/phone - </td>
                <td>Telefon</td>
              </tr>
          </table>

        </div>

      </div>

      <div className="spacer"></div>
    </>
    );
}


export default Key;