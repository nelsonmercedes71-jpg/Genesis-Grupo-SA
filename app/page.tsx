'use client';

import { useState } from 'react';
import { ArrowRight, Building2, ChevronDown, Hammer, Leaf, Scissors, Coffee, CarFront, ShoppingBag, BriefcaseBusiness, Users, Ruler, ShieldCheck, Menu, X, Sparkles } from 'lucide-react';

const branches = [
  ['01','Arquitetura & Design',Building2,'Projetamos espaços com identidade, funcionalidade e visão de futuro.',['Projetos de arquitetura','Habitação e edifícios comerciais','Arquitetura e design de interiores','Remodelação e reabilitação','Urbanismo e paisagismo','Projetos 3D e visualização arquitetónica','Renderização fotorealista','Projetos executivos e compatibilização','Consultoria arquitetónica']],
  ['02','Engenharia',Ruler,'Soluções técnicas integradas para transformar projetos em estruturas viáveis.',['Engenharia civil','Engenharia elétrica','Engenharia hidráulica','Engenharia mecânica','Projetos de estruturas','Instalações elétricas e sanitárias','Climatização','Segurança contra incêndios','Orçamentação e medições','Planeamento e gestão de obras','Consultoria de engenharia']],
  ['03','Construção',Hammer,'Execução, coordenação e gestão de obras com foco em qualidade e resultado.',['Construção de moradias','Construção de edifícios','Construção comercial e institucional','Construção industrial','Remodelação e reabilitação','Obras de acabamento','Estruturas de betão armado','Alvenaria e coberturas','Pavimentos e revestimentos','Instalações técnicas','Obras chave na mão']],
  ['04','Fiscalização de Obras',ShieldCheck,'Acompanhamento técnico para garantir conformidade, controlo e transparência.',['Acompanhamento técnico','Controlo de qualidade','Controlo de materiais','Controlo de custos','Controlo de prazos','Verificação de conformidade','Medição de trabalhos executados','Relatórios técnicos','Acompanhamento de empreiteiros','Receção e entrega de obras']],
  ['05','Consultoria',BriefcaseBusiness,'Decisões mais informadas para investidores, projetos e empreendimentos.',['Consultoria em arquitetura','Consultoria em engenharia','Consultoria imobiliária','Estudos de viabilidade','Estudos técnicos','Avaliação e análise de terrenos','Análise de projetos','Consultoria para investidores','Gestão de projetos','Planeamento de empreendimentos','Desenvolvimento imobiliário']],
  ['06','Ateliê — Corte & Costura',Scissors,'Criação e confeção por medida para pessoas, empresas e instituições.',['Corte e costura por medida','Alfaiataria','Confeção de roupas','Vestuário personalizado','Uniformes profissionais','Uniformes escolares','Roupas corporativas','Ajustes e remodelação de peças','Design de vestuário','Produção por encomenda']],
  ['07','Coworking Center',Users,'Um ambiente para trabalhar, reunir, criar projetos e desenvolver negócios.',['Espaços de trabalho partilhados','Escritórios privados','Salas de reunião','Salas para formação','Postos individuais','Endereço profissional','Espaços para startups','Espaços para freelancers','Espaços para empresas','Eventos e networking','Incubação de projetos']],
  ['08','Carpe Diem — Café',Coffee,'Café, encontros e experiências num espaço pensado para convivência.',['Cafeteria','Café e bebidas quentes','Bebidas frias','Pequenos-almoços','Lanches','Pastelaria','Sanduíches','Refeições ligeiras','Catering','Serviço para eventos','Reuniões e encontros']],
  ['09','American Dream',Sparkles,'Alimentação, lazer e experiências com uma identidade própria.',['Hambúrgueres','Fast food','Cafeteria','Snacks','Refeições rápidas','Bebidas','Take-away','Delivery','Catering','Organização de eventos','Espaço de lazer e convivência','Produtos personalizados da marca']],
  ['10','Produtos & Marcas',ShoppingBag,'Uma frente transversal para produtos físicos, digitais e soluções sob encomenda.',['Produtos personalizados','Vestuário','Acessórios','Produtos de decoração','Materiais e artigos para arquitetura','Produtos corporativos','Brindes personalizados','Produtos digitais','E-books','Templates','Projetos e modelos digitais','Serviços sob encomenda']],
  ['11','Car Wash',CarFront,'Lavagem, estética e detalhamento automóvel para particulares e empresas.',['Lavagem exterior','Lavagem interior','Lavagem completa','Aspiração e higienização','Lavagem de motor','Polimento automóvel','Enceramento e proteção','Tratamento de estofos','Higienização e desodorização','Car detailing','Jantes e pneus','Planos de manutenção','Agendamento online']],
  ['12','Agricultura & Agronegócio',Leaf,'Produção, transformação e comercialização com visão de cadeia de valor.',['Produção agrícola','Hortaliças e frutas','Cereais','Raízes e tubérculos','Produção pecuária','Avicultura','Piscicultura e aquicultura','Transformação de produtos agrícolas','Comercialização e venda direta','Distribuição de produtos agrícolas','Consultoria agrícola','Projetos agrícolas','Sistemas de irrigação','Agricultura sustentável','Agro-processamento','Parcerias e investimentos']]
] as const;

const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

export default function Home(){
 const [open,setOpen]=useState<number|null>(0); const [menu,setMenu]=useState(false);
 return <main>
  <header className="nav"><div className="wrap nav-inner">
   <button className="brand" onClick={()=>go('inicio')}><span className="brand-mark">G</span><span><strong>GENESIS</strong><small>GRUPO S.A.</small></span></button>
   <nav className={menu?'nav-links open':'nav-links'}>{[['grupo','O Grupo'],['ramos','Ramos'],['ecossistema','Ecossistema'],['contacto','Contacto']].map(([id,t])=><button key={id} onClick={()=>{go(id);setMenu(false)}}>{t}</button>)}</nav>
   <button className="nav-cta" onClick={()=>go('contacto')}>Falar connosco <ArrowRight size={16}/></button>
   <button className="menu-toggle" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </div></header>

  <section id="inicio" className="hero"><div className="hero-grid"/><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
   <div className="wrap hero-content"><div className="eyebrow"><span/> UM ECOSSISTEMA EMPRESARIAL</div>
    <h1>Construímos <em>possibilidades.</em></h1>
    <p className="hero-copy">Engenharia, arquitetura, construção, serviços, experiências e negócios conectados numa mesma visão de crescimento.</p>
    <div className="hero-actions"><button className="button gold" onClick={()=>go('ramos')}>Explorar o Grupo <ArrowRight size={18}/></button><button className="button ghost" onClick={()=>go('contacto')}>Entrar em contacto</button></div>
    <div className="hero-foot"><span>Engenharia</span><i/><span>Arquitetura</span><i/><span>Construção</span><i/><span>Consultoria</span></div>
   </div>
  </section>

  <section id="grupo" className="intro section"><div className="wrap intro-grid"><div><div className="eyebrow dark"><span/> A NOSSA VISÃO</div><h2>Peças diferentes.<br/><em>Um só movimento.</em></h2></div><div className="intro-text"><p>A Genesis Grupo S.A. organiza diferentes áreas de atuação como peças de um mesmo ecossistema empresarial. Cada ramo funciona com a sua identidade, mas todos podem criar valor em conjunto.</p><p className="muted">A estrutura apresentada reúne <strong>12 frentes</strong>, desde arquitetura e engenharia até alimentação, mobilidade, agricultura e soluções para marcas.</p></div></div></section>

  <section id="ramos" className="branches section"><div className="wrap"><div className="section-head"><div><div className="eyebrow dark"><span/> 12 RAMOS</div><h2>O Grupo, <em>em movimento.</em></h2></div><p>Cada área representa uma possibilidade. Juntas, formam uma rede preparada para criar, executar e transformar.</p></div>
   <div className="branch-list">{branches.map((b,i)=>{const I=b[2],is=open===i;return <article className={is?'branch active':'branch'} key={b[0]}><button className="branch-top" onClick={()=>setOpen(is?null:i)}><span className="branch-number">{b[0]}</span><span className="branch-icon"><I size={22}/></span><span className="branch-title">{b[1]}</span><span className="branch-intro">{b[3]}</span><span className="branch-chevron"><ChevronDown size={21}/></span></button>{is&&<div className="branch-detail"><div className="detail-line"/><div className="detail-items">{b[4].map(x=><span key={x}>{x}</span>)}</div></div>}</article>})}</div>
  </div></section>

  <section id="ecossistema" className="ecosystem section"><div className="wrap"><div className="eco-card"><div className="eco-copy"><div className="eyebrow"><span/> A LÓGICA GENESIS</div><h2>Do projeto à experiência.<br/><em>Da ideia ao negócio.</em></h2><p>As áreas podem existir de forma independente, mas a verdadeira força está nas conexões: projetar, construir, gerir, fornecer, servir e criar novas oportunidades dentro do mesmo ecossistema.</p><button className="button gold" onClick={()=>go('contacto')}>Vamos conversar <ArrowRight size={18}/></button></div><div className="chess"><div className="chess-caption">12<br/><span>FRENTES</span></div>{branches.map(b=><div className="chess-cell" key={b[0]}><span>{b[0]}</span></div>)}</div></div></div></section>

  <section id="contacto" className="contact section"><div className="wrap contact-grid"><div><div className="eyebrow dark"><span/> CONTACTO</div><h2>Tem um projeto?<br/><em>Vamos construir juntos.</em></h2><p>Fale com a Genesis Grupo S.A. sobre projetos, parcerias, serviços ou oportunidades de negócio.</p></div><form className="contact-form" onSubmit={e=>{e.preventDefault();alert('Obrigado. O seu pedido foi registado para contacto.')}}><label>Nome<input required placeholder="O seu nome"/></label><label>Email<input required type="email" placeholder="nome@empresa.com"/></label><label>Mensagem<textarea required rows={4} placeholder="Como podemos ajudar?"/></label><button className="button dark" type="submit">Enviar mensagem <ArrowRight size={18}/></button></form></div></section>

  <footer className="footer"><div className="wrap footer-inner"><div className="brand footer-brand"><span className="brand-mark">G</span><span><strong>GENESIS</strong><small>GRUPO S.A.</small></span></div><p>Engenharia • Arquitetura • Construção • Fiscalização • Consultoria</p><span>© {new Date().getFullYear()} Genesis Grupo S.A.</span></div></footer>
 </main>
}
