// Dados da leaderboard
const data = {
    "extra-short":[["zDeletex",1.95],["RoidEs",2.0],["Nickzadas",2.0],["RJ",2.0],["jogadinhas",2.0],["Vzku",2.05],["Abacate",2.05],["Opku",2.05],["bielxyz",2.05],["junin",2.05],["izprite",2.05],["deathlly",2.05],["Xiteeeeyz",2.05],["kirosh",2.05],["Xuyie",2.1],["Resgado",2.1],["Nesix",2.1],["Faxe i",2.1],["AmoFazerTelly",2.1]],
    "short":[["RJ",3.75],["zDeletex",3.75],["Thirty",3.8],["RoidEs",3.8],["Vzku",3.8],["Nickzadas",3.8],["izprite",3.8],["Limaaas",3.85],["abacatebals",3.85],["XuyieTheG",3.85],["Resgado",3.85],["opku",3.85],["jogadinhas",3.85],["Junin",3.85],["sant",3.85],["XiteyZ",3.85],["deathlly",3.85],["bielzxy",3.9],["faxxey",3.9],["fallen",3.9]],
    "normal":[["RJ",7.25],["zDeletex",7.25],["Rooides",7.3],["Vzku",7.3],["Thirty",7.3],["izprite",7.3],["Xiteey",7.3],["Xuye",7.35],["abacate",7.35],["Junin",7.35],["Jogadinhas",7.35],["Resgado",7.35],["Nickzadas",7.35],["Limaaas",7.4],["deathlly",7.4]],
    "long":[["RJ",12.1],["zDeletex",12.15],["Junin",12.2],["izprite",12.2],["Vzku",12.25],["Nickzadas",12.4]],
    "inclined-short":[["Rjaku",2.95],["Nickzadas",2.95],["bielxyz1",3.15],["Thirty",3.25],["Vzku",3.3],["jogadinhas",3.3],["Rooídes",3.55],["XuyeWhatsApp",3.6],["Limaaas",3.65],["Resgatado",3.95]],
    "inclined":[["Thirty",6.6],["guqa",7.25],["Bzuki",7.55],["jogadinhas",7.7],["Limaaas",8.0]],
    "onestack":[["Thirty",11.4],["Opku",11.6],["XuyeWhatsApp",11.8],["Nesix",11.8],["jogadinhas",11.8],["Deathlly",11.8],["Vzku",11.85],["Abacate",11.85],["Pxdrq",11.85],["kirosh",11.9]]
};

// Preenche as tabelas
for(const mode in data){
    const tbody=document.querySelector(`#${mode} tbody`);
    data[mode].forEach(([name,score])=>{
        const tr=document.createElement("tr");
        tr.innerHTML=`<td>${name}</td><td>${score}</td>`;
        tbody.appendChild(tr);
    });
}

// Controle de abas
const tabs=document.querySelectorAll(".tab-btn");
const contents=document.querySelectorAll(".tab-content");

tabs.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const tab=btn.dataset.tab;
        contents.forEach(c=>c.classList.remove("active"));
        document.getElementById(tab).classList.add("active");
        tabs.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        window.scrollTo({top:0,behavior:"smooth"});
    });
});
