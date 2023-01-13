//To show that the page is not the original MPF
document.body.style.border = "5px solid red";

removeOldElementsFromPortal();
const prefferedLinks = [];
const itens = JSON.parse(localStorage.getItem("exibir"));

if(itens === null) {
    for(var i = 1; i <= returnArrayMenu().length; i++) {        
       prefferedLinks.push(i);        
    }       
    localStorage.setItem("exibir", JSON.stringify(prefferedLinks));
} else {
    for(var i in itens) {    
        prefferedLinks.push(itens[i]);        
    }
}

insertNewElementInPortal();

// I need to create this function to sanitize the values that are inserted into objects. Oh! laziness.
// *** Risk of the cross-site scripting attacks ***
function sanitizer(html) {
    var ret = html.toString();
    return ret;
}

function returnArrayMenu() {
	var pos = 1;
	return sites = [
		[pos++,"https://portal.mpf.mp.br/novaintra","img/icone-Intranet-MPFNOVA.jpg","intranet"],
		[pos++,"https://portal.mpf.mp.br/unico","img/icone-unico-4.jpg","Único"],
		[pos++,"https://portal.mpf.mp.br/unico","img/icone-unicobeta.jpg","Único - Versão Beta"],	
		[pos++,"https://portal.mpf.mp.br/eevidence","img/icone-E-evidence.jpg","E-Evidence"],
		[pos++,"https://portal.mpf.mp.br/kairos","img/icone-Kairos.jpg","Kairos"],
		[pos++,"https://portal.mpf.mp.br/horus","img/icone-Horus.jpg","Hórus"],
		[pos++,"https://portal.mpf.mp.br/snp/","img/icone-SNP.jpg","SNP"],
		[pos++,"https://mpfdrive.mpf.mp.br/","img/icone-MPFDrive.jpg","MPF Drive"],
		[pos++,"https://portal.mpf.mp.br/horusnet_public/?app=planassiste","img/icone-Planasiste.jpg","Plan-Assiste"],
		[pos++,"https://webmail.mpf.mp.br/gw/webacc","img/icone-Groupwise.jpg","Correio Eletrônico"],
		[pos++,"https://mail.google.com/mail/u/0/#inbox","img/icone-Correio.jpg","Correio Eletrônico"],
		[pos++,"https://portal.mpf.mp.br/rededebibliotecas/","img/icone-Biblioteca.jpg","Biblioteca"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=258","img/icone-Saude.jpg","Sistema de Saúde"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=sigov","img/icone-SIGOV.jpg","SiGOV"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=GESTAO_ADMINISTRATIVA","img/icone-SGA_2.jpg","SGA"],
		[pos++,"https://portal.mpf.mp.br/radar2/","img/icone-radar2.png","Radar"],
		[pos++,"https://portal.mpf.mp.br/pericial/","img/icone-Pericial.png","Pericial"],
		[pos++,"https://portal.mpf.mp.br/sisam/portal","img/icone-SISAM.png","SISAM"],
		[pos++,"https://portal.mpf.mp.br/sspr",null,"Portal de Senhas"],
		[pos++,"https://portal.mpf.mp.br/antispam",null,"ANTISPAM"],
	        [pos++,"https://portal.mpf.mp.br/asi/",null,"ASI"],
        	[pos++,"https://portal.mpf.mp.br/contel",null,"Contel"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=332",null,"Destinações COVID"],
		[pos++,"https://portal.mpf.mp.br/ejbca/enrol/browser.jsp",null,"Emissão de Certificado Digital (AC-Interna)"],
	        [pos++,"https://sgov.net.br/",null,"Emissão de Certificado Digital (Em Nuvem)"],
		[pos++,"https://portal.mpf.mp.br/extractus/?atena_reiniciar_historico=true",null,"Extractus"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=inventario_de_sistemas",null,"Inventário de Sistemas"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=264",null,"LGPD Consulta"],
		[pos++,"https://portal.mpf.mp.br/mof",null,"MOF - Sistema Mapeamento de Ofícios e Funções"],
		[pos++,"https://portal.mpf.mp.br/bi/servlet/mstrWeb?evt=3140&amp;src=mstrWeb.3140&amp;documentID=BED7380011EBE8C48F4B0080EF959B3F&amp;Server=mstris.pgr.mpf.mp.br&amp;Project=BI%20Ouvidoria&amp;Port=0&amp;share=1",null,"Ouvidômetro - Painel do Gestor"],
		[pos++,"https://portal.mpf.mp.br/pergamumweb/",null,"Pergamum - Administração"],
		[pos++,"https://portal.mpf.mp.br/apex/f?p=202",null,"Pérsia 1.5 (Estágio Probatório)"],
		[pos++,"https://portal.mpf.mp.br/persia",null,"Pérsia 2.0"],
 		[pos++,"https://portal.mpf.mp.br/pgo",null,"PGO - Painel Gerencial de Ofícios"],
		[pos++,"https://portal.mpf.mp.br/portaldedados",null,"Portal de Recepção de Dados do MPF"],
	        [pos++,"https://portal.mpf.mp.br/sspr",null,"Portal de Senhas"],
	        [pos++,"https://portal.mpf.mp.br/apex/f?p=trabalho_escravo",null,"Relatórios de Fiscalização Móvel de Trabalho Escravo"],
	        [pos++,"https://portal.mpf.mp.br/saude/saudeemrede",null,"Saúde em Rede"],
	        [pos++,"https://portal.mpf.mp.br/apex/f?p=SESSAO_ELETRONICA",null,"Sessão Eletrônica do Conselho Superior"],
	        [pos++,"https://portal.mpf.mp.br/autoriza",null,"Sistema Autoriza"],
	        [pos++,"https://portal.mpf.mp.br/apex/f?p=compet",null,"Sistema Avaliação por Competências"],
	        [pos++,"https://portal.mpf.mp.br/ouvidoria",null,"Sistema Cidadão (área do atendente)"],
	        [pos++,"https://portal.mpf.mp.br/apex/f?p=sci",null,"Sistema Cooperação Internacional"],
		[pos++,"https://portal.mpf.mp.br/sde",null,"Sistema de Diligências Externas"],
	        [pos++,"https://portal.mpf.mp.br/index.php/admin",null,"Sistema de questionários e pesquisas LimeSurvey"],
	        [pos++,"https://portal.mpf.mp.br/egab/",null,"Sistema eGab"],
        	[pos++,"https://portal.mpf.mp.br/apex/f?p=EVENTOS",null,"Sistema Gestão de Eventos"],
	        [pos++,"https://portal.mpf.mp.br/novaintra/admin-intranet-mpf/mais-sistemas/sistema-de-gestao-de-frota/gestao-da-frota",null,"Sistema Interativo de Gestão da Frota Nacional"],
	        [pos++,"https://portal.mpf.mp.br/novaintra/areas-tematicas/administrativas/administracao/viagens/",null,"Sistema Gestão de Viagens"],
        	[pos++,"https://portal.mpf.mp.br/apex/f?p=selecao",null,"Sistema Seleção de Membros"],
	        [pos++,"https://portal.mpf.mp.br/examinat",null,"SPPEA - Examinat"],
		[pos++,"https://portal.mpf.mp.br/pactum",null,"SPPEA - Pactum"],
		[pos++,"https://portal.mpf.mp.br/simba",null,"SPPEA - SIMBA(necessário certificado digital instalado)"],
		[pos++,"https://portal.mpf.mp.br/sittel",null,"SPPEA - SITTEL(necessário certificado digital instalado)"],
        	[pos++,"https://portal.mpf.mp.br/apex/f?p=SNC_MPF",null,"SPPEA - Sistema Nacional de Cálculo"],
	        [pos++,"https://portal.mpf.mp.br/pedidos/",null,"SPPEA - Sistema Nacional de Pedidos"],
        	[pos++,"https://portal.mpf.mp.br/zoom/",null,"SPPEA - ZOOM"],
	        [pos++,"https://mpf-mp-br.zoom.us/",null,"STIC - Zoom Meetings"],
        	[pos++,"https://originaltaxi.com.br/portal/login/taxigov",null,"TaxiGov"],
		[pos++,"https://portal.mpf.mp.br/tvmpf/",null,"TV MPF"],
	        [pos++,"https://portal.mpf.mp.br/wiki/index.php5/Wiki_do_MPF",null,"WiKi do MPF"]

        ];
}

function returnImages() {
	return document.querySelectorAll("img.bd-placeholder-img.rounded-circle.img-fluid.icone");
}

function returnDivs() {
	return document.querySelectorAll("div.row.acesso-rapido");
}

function returnCheckBox() {
	return document.getElementsByClassName("linkPreffered");

}

function removeOldElementsFromPortal() {
	var i = 0;
	var imgs = returnImages();
	var divs = returnDivs();
	divs.forEach(element => {
		element.className = "row acesso-rapido my-1 my-md-2 my-lg-4 py-1 py-md-4";
		element.innerHTML = sanitizer("");
		if((i++) >= 1) {
			element.remove();
		} 
	});
	
	imgs.forEach(element => {
		element.style = "";
	});
}

function insertNewElementInPortal() {
	var divs = returnDivs();
	returnArrayMenu().forEach(site => {	
            if(site.some(r => prefferedLinks.includes(r))) {
                if(site[2] !== null) {
                    divs[0].innerHTML += sanitizer(colContent(site[0], site[1],site[2],site[3]));
                } else {
                    divs[0].innerHTML += sanitizer(colContentWithImage(site[0], site[1],site[3]));
                }
            }
			
	});      
        
        
        var c = `<li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" id="navDropDownLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none"></rect>
                            <circle cx="128" cy="128" r="44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle>
                            <path d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
                        </svg>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navDropDownLink">
                        <a class="dropdown-item" href="#" onclick="listAll()">Escolher itens</a>
                        <a class="dropdown-item" href="#" onclick="cleanOption()">Remover seleções</a>
                        <a class="dropdown-item" href="#" onclick="location.reload()">Itens escolhidos</a>
                    </div>
                </li>`;
    
        var barNav = document.getElementById("navbarTogglerDemo01");               
        var btn = document.createElement("ul");
        
        btn.innerHTML = sanitizer(c);

        btn.setAttribute("id", "btConfig");  
        btn.setAttribute("class","navbar-nav");
        barNav.insertBefore(btn,barNav.children[2]);
        insertScript();

	
}

function colContent(id, link,img,txt) {
	text = `<div class="col-lg-2 col-md-4 col-sm-4 col-4">
		  <input class="linkPreffered" style="display: none;" type="checkbox" id="icone${id}" name="icone${id}" value="${id}" onclick="favorite(${id})">
          <a href="${link}" target="_blank">
          <img src="${img}" class="bd-placeholder-img rounded-circle img-fluid icone" alt="" style="">
          <p class="mt-2">${txt}</p>
          </a>
        </div>`;
        
	return text;       
}

function colContentWithImage(id, link,txt) {
    var txtIcon = txt.split(" ");
    const randomColor = Math.floor(Math.random() * 9999999).toString(16).padStart(6, "0");
     
	var text = `<div class="col-lg-2 col-md-4 col-sm-4 col-4">
          <input class="linkPreffered" style="display:none;" type="checkbox" id="icone${id}" name="icone${id}" value="${id}" onclick="favorite(${id})">
          <a href="${link}" target="_blank">
		  <svg width="60" height="60" class="bd-placeholder-img rounded-circle img-fluid icone">
  			<rect x="0" y="0" width="60" height="60" fill="#${randomColor}"></rect>
  			<circle cx="30" cy="30" r="20" stroke="white" stroke-width="1.5" fill="none" />  			
    		<text x="20" y="40" style="font-size: 30px;fill:#faff00;">
      			${txtIcon[0][0]}      			
      		</text>
		  </svg>
          <p class="mt-2">${txt}</p>
          </a>       
        </div>`;       
	return text;       
}

function saveItemMenu(item) {
	localStorage.setItem("menu", item);
}

function iconeIng() {
    var html = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"></rect>
        <circle cx="128" cy="128" r="44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle>
        <path d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.2-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
    </svg>`;
    
    return html;
}

function insertScript() {
    var newScript = document.createElement("SCRIPT");
    newScript.innerHTML = `
        const marcados = []
    
        function cleanOption() {
            localStorage.clear();
            location.reload(); 
        }
    
        function listAll() {
            toggleCheckBoxs()
            //location.reload(); 
        }
    
        function listAll() {
            toggleCheckBoxs()
            //location.reload(); 
        }
    
        function favorite(txt) {
            var x = document.getElementById("icone"+txt); 
            if(x.checked == true) {
                marcados.push(txt);
            } else {                                    
                var indexItem = marcados.indexOf(txt);
                marcados.splice(indexItem, 1);
            }              
            localStorage.setItem("exibir", JSON.stringify(marcados));
        }
    
        function toggleCheckBoxs() {
            var x = document.getElementsByClassName("linkPreffered"); 
            for(var i = 0; i < x.length; i++) {            
                if (x[i].style.display === "none") {
                    x[i].style.display = "block";
                } else {
                    x[i].style.display = "none";
                }
            }
        } 
    `;
    document.body.appendChild(newScript);
}


