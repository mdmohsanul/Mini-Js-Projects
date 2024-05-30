const insert = document.getElementById("insert");

// function generateKeyRow(key, keyCode, code) {
//   let tbl = document.createElement(<tr></tr>);
// }
window.addEventListener("keydown", (e) => {
  //   insert.innerHTML = `
  //     <div class='color'>
  //     <table>
  //     <tr>
  //       <th>Key</th>
  //       <th>Keycode</th>
  //       <th>Code</th>
  //     </tr>
  //     <tr>
  //     ${generateKeyRow(e.key, e.keyCode, e.code)}

  //     </tr>

  //   </table>
  //     </div>
  //     `;
  let tbl = document.createElement("table");
  tbl.innerHTML = `<tr>
  <th>${e.key}</th>
  <th>${e.keyCode}</th>
  <th>${e.code}</th>
</tr>`;
  insert.appendChild(tbl);
});
console.log(insert.childNodes);
