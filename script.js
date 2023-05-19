const displayInbox = (data) => {
   const inboxHtml=document.querySelector(".email");
    const inboxUnread =document.querySelector(".unread");
   const {emails}=data;
    
   emails.map((mail)=>{
    if(mail.unread){ 
    inboxHtml.innerHTML+= `
    <div class="email__head">
    <button class="email__icon email__icon--closed"></button>
    <div class="email__info">
        <div class="email__sender">${mail.sender.name}</div>
        <div class="email__subject">${mail.subject}</div>
    </div>
    <div class="email__time">${mail.time}</div> 
    </div>` 
    } else {
        inboxUnread.innerHTML+= `
    <div class="email__head">
    <button class="email__icon email__icon--opened"></button>
    <div class="email__info">
        <div class="email__sender">${mail.sender.name}</div>
        <div class="email__subject">${mail.subject}</div>
        </div>
        <div class="email__time">${mail.time}</div> 
        </div>` 

  };
    });
 
 }; 
// Vytvoříme jednoduchou aplikaci, která zobrazuje obsah e-mailové schránky.
// const displayInbox =(data) => {
//     const {emails}=data;
//     const olElm = document.querySelector("ol")
//     emails.map((inbox)=>
//     olElm.innerHTML +=`<li class="email__sender">${inbox.sender.name} <div class="email--expand"> ${inbox.sender.email}</div></li>`)   }
    
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
        .then((response) => {
            return response.json();
        })
        .then(displayInbox)
  
//____________________________________________________________________________
   
   
    // ✔️ Vytvořte si repozitář ze šablony cviceni-emaily aplikace pro práci s e-maily.
    // ✔️ Prohlédněte si dokumentaci k e-mailovému API. V prohlížeči si vyzkoušejte, jak API funguje.
    // ✔️ Podívejte se, jak se v HTML vytváří jeden e-mail.
    //✔️  Smažte v HTML obsah elementu #inbox. Zobrazte na stránce e-maily stažené z API. Tělo e-mailu nechte prozatím prázdné.
    


    // ✔️V naší e-mailové aplikaci zobrazíme dvě oddělené sekce: přečtené zprávy a nepřečtené zprávy.

    //✔️V HTML stránce vytvořte dvě sekce. Jedna bude sloužit k zobrazení přečtené a druhá nepřečtené pošty.
    // ✔️Naplňte každou sekci přislušnými zprávami načtenými z API.
    // ✔️Zařiďte, aby se u přečtených e-mailů zobrazovala ikonka otevřené obálky (viz CSS třída email__icon--opened).