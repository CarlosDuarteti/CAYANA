
let carrinho=[];
function atualizar(){document.getElementById('contador').innerText=carrinho.reduce((a,b)=>a+b.qtd,0)}
function addCarrinho(n,p){let i=carrinho.find(x=>x.nome==n);if(i)i.qtd++;else carrinho.push({nome:n,preco:p,qtd:1});alert('Produto adicionado ao carrinho!');atualizar();}
function abrirCarrinho(){let h='',t=0;carrinho.forEach((i,x)=>{t+=i.preco*i.qtd;h+=`${i.nome} (${i.qtd}) <button onclick="menos(${x})">-</button> <button onclick="mais(${x})">+</button> <button onclick="rem(${x})">🗑️</button><hr>`});document.getElementById('itens').innerHTML=h;document.getElementById('total').innerHTML='Total: R$ '+t.toFixed(2);document.getElementById('carrinho').style.display='block';}
function mais(i){carrinho[i].qtd++;abrirCarrinho();atualizar();}
function menos(i){carrinho[i].qtd--;if(carrinho[i].qtd<=0)carrinho.splice(i,1);abrirCarrinho();atualizar();}
function rem(i){carrinho.splice(i,1);abrirCarrinho();atualizar();}
function enviarWhatsapp(){let m='Novo Pedido%0A';carrinho.forEach(i=>m+=`${i.nome} x${i.qtd}%0A`);window.open('https://wa.me/5561999397357?text='+m)}
