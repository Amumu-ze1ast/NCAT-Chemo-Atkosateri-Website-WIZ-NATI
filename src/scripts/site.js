(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;

  /* THEME TOGGLE */
  var tBtn = document.getElementById('theme-toggle');
  var metaTC=document.querySelector('meta[name="theme-color"]');
  function applyTheme(t){ root.setAttribute('data-theme', t); try{localStorage.setItem('ncat-theme', t);}catch(e){}
    tBtn.setAttribute('aria-label', t==='dark' ? 'Switch to light theme' : 'Switch to dark theme');
    if(metaTC) metaTC.setAttribute('content', t==='dark' ? '#02132a' : '#ffffff');
    if(window.__recolorNet) window.__recolorNet(); }
  tBtn.addEventListener('click', function(){ applyTheme(root.getAttribute('data-theme')==='dark'?'light':'dark'); });
  applyTheme(root.getAttribute('data-theme')||'light');

  var header = document.getElementById('site-header');
  function onScroll(){ if(window.scrollY>24) header.classList.add('scrolled'); else header.classList.remove('scrolled'); }

  var progress = document.getElementById('progress');
  function setProgress(){ var h=document.documentElement; var max=h.scrollHeight-h.clientHeight; progress.style.width=(max>0?(h.scrollTop/max*100):0)+'%'; }
  var navLinks=[].slice.call(document.querySelectorAll('nav.main a[href^="#"]'));
  var spyT=navLinks.map(function(a){return document.getElementById(a.getAttribute('href').slice(1));});
  function spy(){ var pos=window.scrollY+150,cur=-1; for(var i=0;i<spyT.length;i++){var t=spyT[i]; if(t&&t.offsetTop<=pos)cur=i;} navLinks.forEach(function(a,i){ if(i===cur)a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); }); }
  var totop=document.getElementById('totop');
  totop.addEventListener('click', function(){ window.scrollTo({top:0,behavior:reduce?'auto':'smooth'}); });
  function toggleTop(){ if(window.scrollY>700)totop.classList.add('show'); else totop.classList.remove('show'); }
  var tick=false;
  window.addEventListener('scroll', function(){ if(!tick){ requestAnimationFrame(function(){onScroll();setProgress();spy();toggleTop();tick=false;}); tick=true; } }, {passive:true});
  onScroll();setProgress();spy();toggleTop();

  document.querySelectorAll('.stat .n').forEach(function(el){
    var node=el.firstChild; if(!node||node.nodeType!==3) return;
    var m=node.nodeValue.trim().match(/^(\D*)(\d+)(.*)$/); if(!m) return;
    var pre=m[1],target=parseInt(m[2],10),suf=m[3]; if(reduce) return;
    node.nodeValue=pre+'0'+suf; var done=false;
    var io=new IntersectionObserver(function(en){en.forEach(function(e){ if(e.isIntersecting&&!done){done=true;io.disconnect();
      var s=null,dur=1100; function step(ts){if(!s)s=ts;var p=Math.min((ts-s)/dur,1);node.nodeValue=pre+Math.round((1-Math.pow(1-p,3))*target)+suf;if(p<1)requestAnimationFrame(step);} requestAnimationFrame(step);}});},{threshold:.5}); io.observe(el);
  });

  var reveals=document.querySelectorAll('section .lede,.paths,.rlist,.pgrid,.ngrid,.events,.feature2,.trust,.gallery,.req,.hero-photo,.stats');
  reveals.forEach(function(el){el.classList.add('reveal');});
  if(reduce||!('IntersectionObserver' in window)){ reveals.forEach(function(el){el.classList.add('in');}); }
  else { var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io2.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'}); reveals.forEach(function(el){io2.observe(el);}); }

  /* pointer-tracked spotlight on audience cards */
  document.querySelectorAll('.path').forEach(function(card){
    card.addEventListener('pointermove',function(e){
      var r=card.getBoundingClientRect();
      card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
      card.style.setProperty('--my',((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
    });
  });

  var gal=document.getElementById('gallery');
  if(gal){
    var gPrev=document.getElementById('gal-prev'),gNext=document.getElementById('gal-next');
    if(gPrev)gPrev.addEventListener('click',function(){gal.scrollBy({left:-336,behavior:reduce?'auto':'smooth'});});
    if(gNext)gNext.addEventListener('click',function(){gal.scrollBy({left:336,behavior:reduce?'auto':'smooth'});});
  }

  var drawer=document.getElementById('drawer'),openBtn=document.getElementById('open-drawer'),closeBtn=document.getElementById('close-drawer'),lastF=null;
  function openD(){lastF=document.activeElement;drawer.setAttribute('open','');drawer.setAttribute('aria-hidden','false');openBtn.setAttribute('aria-expanded','true');closeBtn.focus();document.body.style.overflow='hidden';}
  function closeD(){drawer.removeAttribute('open');drawer.setAttribute('aria-hidden','true');openBtn.setAttribute('aria-expanded','false');document.body.style.overflow='';if(lastF)lastF.focus();}
  openBtn.addEventListener('click',openD);closeBtn.addEventListener('click',closeD);
  drawer.querySelectorAll('[data-close], .panel-d a').forEach(function(el){el.addEventListener('click',closeD);});

  var sOv=document.getElementById('search-overlay'),sOpen=document.getElementById('open-search'),sClose=document.getElementById('close-search'),sIn=document.getElementById('site-search'),sLast=null;
  function openS(){sLast=document.activeElement;sOv.setAttribute('open','');document.body.style.overflow='hidden';setTimeout(function(){sIn.focus();},30);}
  function closeS(){sOv.removeAttribute('open');document.body.style.overflow='';if(sLast)sLast.focus();}
  sOpen.addEventListener('click',openS);sClose.addEventListener('click',closeS);
  sOv.querySelectorAll('[data-close-search], .sugg a').forEach(function(el){el.addEventListener('click',closeS);});
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){if(sOv.hasAttribute('open'))closeS();if(drawer.hasAttribute('open'))closeD();}
    if(e.key==='/'&&!sOv.hasAttribute('open')&&!/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)){e.preventDefault();openS();}
    if(e.key==='Tab'){var dlg=sOv.hasAttribute('open')?sOv:(drawer.hasAttribute('open')?drawer:null);if(!dlg)return;
      var f=dlg.querySelectorAll('button, a[href], input');var first=f[0],last=f[f.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
  });

  var announce=document.getElementById('announce'),aC=document.getElementById('announce-close');
  if(aC)aC.addEventListener('click',function(){announce.style.display='none';});

  var form=document.getElementById('req-form');
  if(form){
    var nI=document.getElementById('rf-name'),eI=document.getElementById('rf-email'),nE=document.getElementById('rf-name-err'),eE=document.getElementById('rf-email-err'),ok=document.getElementById('rf-ok');
    function fail(i,el,m){i.setAttribute('aria-invalid','true');el.textContent=m;}function clr(i,el){i.removeAttribute('aria-invalid');el.textContent='';}
    form.addEventListener('submit',function(e){e.preventDefault();var bad=false;
      if(!nI.value.trim()){fail(nI,nE,'Please enter your name.');bad=true;}else clr(nI,nE);
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(eI.value)){fail(eI,eE,'Enter a valid email address.');bad=true;}else clr(eI,eE);
      if(bad){(nI.getAttribute('aria-invalid')?nI:eI).focus();ok.classList.remove('show');return;}
      ok.classList.add('show');form.querySelector('button[type="submit"]').textContent='Sent ✓';});
    [nI,eI].forEach(function(i){i.addEventListener('input',function(){if(i.getAttribute('aria-invalid'))clr(i,i===nI?nE:eE);});});
  }

  /* molecular canvas — recolors per theme */
  var canvas=document.getElementById('netcanvas');
  if(canvas&&canvas.getContext){
    var ctx=canvas.getContext('2d'),nodes=[],W=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2),raf=null;
    var GOLD='253,185,39',LINE='0,70,132';
    function readColors(){ var s=getComputedStyle(root); LINE=(s.getPropertyValue('--hero-line')||'0,70,132').trim(); }
    window.__recolorNet=function(){ readColors(); if(reduce) draw(false); };
    function count(){var a=window.innerWidth;if(a<560)return 16;if(a<940)return 26;return 40;}
    function size(){var r=canvas.getBoundingClientRect();W=r.width;H=r.height;canvas.width=W*dpr;canvas.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);}
    function build(){nodes=[];var n=count();for(var i=0;i<n;i++){nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.8+1.2,gold:Math.random()<.16});}}
    function draw(move){ctx.clearRect(0,0,W,H);var max=Math.min(W,H)*0.18,max2=max*max;
      for(var i=0;i<nodes.length;i++){var a=nodes[i];if(move){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;}
        for(var j=i+1;j<nodes.length;j++){var b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;
          if(d2<max2){var al=(1-d2/max2)*0.5,g=(a.gold||b.gold);ctx.strokeStyle='rgba('+(g?GOLD:LINE)+','+(g?al*0.9:al*0.4)+')';ctx.lineWidth=g?1.1:0.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}
      for(var k=0;k<nodes.length;k++){var p=nodes[k];ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.2832);ctx.fillStyle=p.gold?'rgba('+GOLD+',.95)':'rgba('+LINE+',.5)';ctx.fill();
        if(p.gold){ctx.beginPath();ctx.arc(p.x,p.y,p.r+3.5,0,6.2832);ctx.strokeStyle='rgba('+GOLD+',.25)';ctx.lineWidth=1;ctx.stroke();}}}
    function loop(){draw(true);raf=requestAnimationFrame(loop);}
    function init(){size();build();readColors();if(reduce){draw(false);}else{if(raf)cancelAnimationFrame(raf);loop();}}
    var rt=null;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(init,180);});init();
    if(!reduce&&'IntersectionObserver' in window){new IntersectionObserver(function(en){if(en[0].isIntersecting){if(!raf)loop();}else{if(raf){cancelAnimationFrame(raf);raf=null;}}},{threshold:0}).observe(canvas);}
  }
})();
