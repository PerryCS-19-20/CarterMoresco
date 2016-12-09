function buildMap(x){
    var z = document.getElementById(x);
    var bullet = document.createElement('UL');
    var listItem = document.createElement('LI');
    z.appendChild(bullet);
    
    var linkIndex = document.createElement('A');
    var listItem = document.createElement('LI');
    linkIndex.setAttribute("href", "index.html");
    linkIndex.textContent = "Index";
    listItem.appendChild(linkIndex);
    bullet.appendChild(listItem);
    
    var linkJava = document.createElement('A');
    var listItem = document.createElement('LI');
    linkJava.setAttribute("href", "JavaEvents.html");
    linkJava.textContent = "Java Events";
    listItem.appendChild(linkJava);
    bullet.appendChild(listItem);
    
    var linkBreakout = document.createElement('A');
    var listItem = document.createElement('LI');
    linkBreakout.setAttribute("href", "breakout2.html");
    linkBreakout.textContent = "Breakout Game";
    listItem.appendChild(linkBreakout);
    bullet.appendChild(listItem);
    
    var linkTTT = document.createElement('A');
    var listItem = document.createElement('LI');
    linkTTT.setAttribute("href", "tictactoe.html");
    linkTTT.textContent = "TicTacToe Game";
    listItem.appendChild(linkTTT);
    bullet.appendChild(listItem);
    
    var linkHTML = document.createElement('A');
    var listItem = document.createElement('LI');
    linkHTML.setAttribute("href", "htmltest.html");
    linkHTML.textContent = "HTML Test";
    listItem.appendChild(linkHTML);
    bullet.appendChild(listItem);
    
    var linkToDo = document.createElement('A');
    var listItem = document.createElement('LI');
    linkToDo.setAttribute("href", "todolist.html");
    linkToDo.textContent = "To Do List";
    listItem.appendChild(linkToDo);
    bullet.appendChild(listItem);
    
    var linkMult = document.createElement('A');
    var listItem = document.createElement('LI');
    linkMult.setAttribute("href", "multTable.html");
    linkMult.textContent = "Multiplication Table";
    listItem.appendChild(linkMult);
    bullet.appendChild(listItem);
    
    var linkBetterMult = document.createElement('A');
    var listItem = document.createElement('LI');
    linkBetterMult.setAttribute("href", "betterMultTable.html");
    linkBetterMult.textContent = "Better Multiplication Table";
    listItem.appendChild(linkBetterMult);
    bullet.appendChild(listItem);
  
    var linkSiteMap = document.createElement('A');
    var listItem = document.createElement('LI');
    linkSiteMap.setAttribute("href", "sitemap.html");
    linkSiteMap.textContent = "SiteMap";
    listItem.appendChild(linkSiteMap);
    bullet.appendChild(listItem);
   
    var linkchalkboard = document.createElement('A');
    var listItem = document.createElement('LI');
    linkchalkboard.setAttribute("href", "chalkboard.html");
    linkchalkboard.textContent = "Chalkboard";
    listItem.appendChild(linkchalkboard);
    bullet.appendChild(listItem);
    
    var linkCalc = document.createElement('A');
    var listItem = document.createElement('LI');
    linkCalc.setAttribute("href", "calculator.html");
    linkCalc.textContent = "Calculator";
    listItem.appendChild(linkCalc);
    bullet.appendChild(listItem);
}