(function(){
'use strict';
var KEY='gms10';

var D={
  site:{
    logo_url:'',
    logo_text:'USHAŞ',
    name_tr:'USHAŞ Uluslararası Sağlık Hizmetleri',
    name_en:'USHAŞ International Health Services',
    title_tr:'USHAŞ — Uluslararası Sağlık Turizmi',
    title_en:'USHAŞ — International Health Tourism',
    desc_tr:'T.C. Sağlık Bakanlığı\'nın ilgili kuruluşu.',
    desc_en:'Affiliated institution of the Turkish Ministry of Health.',
    lang:'both'
  },
  hero:{
    kicker_tr:'ULUSLARARASI SAĞLIK HİZMETLERİ A.Ş.',
    kicker_en:'INTERNATIONAL HEALTH SERVICES',
    title_tr:'Sağlıkta\nKüresel\nGüç.',
    title_en:'Global\nPower in\nHealth.',
    sub_tr:'Türkiye\'nin sağlık turizmini dünyaya taşıyan kurumsal güç.',
    sub_en:'The institutional force taking Turkey\'s health tourism to the world.',
    cta_tr:'HİKAYEYİ KEŞFEDİN',
    cta_en:'EXPLORE THE STORY',
    cta_url:'',
    media:'/images/hero.png',
    media_type:'image',
    media_pos:'center center',
    opacity:40,
    gradient:35,
    parallax:30,
    align:'left'
  },
  design:{red:'#C8102E',red2:'#FF3542',ink:'#0B0C0E',font:"'Inter',Arial,sans-serif"},
  contact:{
    kicker_tr:'İLETİŞİM',kicker_en:'CONTACT',
    title_tr:'Birlikte\nglobal\nsağlık.',title_en:'Let\'s talk\nglobal\nhealth.',
    body_tr:'Uluslararası medya soruları için iletişim ekibimize ulaşın.',
    body_en:'Reach our team for international media enquiries.',
    name:'',
    role_tr:'ULUSLARARASI MEDYA İLETİŞİM',
    role_en:'INTERNATIONAL MEDIA CONTACT',
    email:'',phone:'',org:'USHAŞ',web:'https://ushas.gov.tr'
  },
  assets:[
    {url:'/images/hero.png',name:'Hero — İstanbul'},
    {url:'/images/brand.png',name:'Hastane atriumu'},
    {url:'/images/services.png',name:'Hasta danışmanlığı'},
    {url:'/images/gallery-1.png',name:'Ameliyathane'},
    {url:'/images/gallery-2.png',name:'Konferans'},
    {url:'/images/gallery-3.png',name:'Hasta salonu'},
    {url:'/images/gallery-4.png',name:'Dijital sağlık'}
  ],
  gal_items:[
    {url:'/images/gallery-1.png',cap:'İLERİ TEKNOLOJİ'},
    {url:'/images/gallery-2.png',cap:'ULUSLARARASI ETKİNLİKLER'},
    {url:'/images/gallery-3.png',cap:'HASTA KONFORU'},
    {url:'/images/gallery-4.png',cap:'DİJİTAL SAĞLIK'}
  ],
  sections:[
    {id:'press',vis:true,preset:'redband',
     kicker_tr:'01 / BASIN BÜLTENİ',kicker_en:'01 / PRESS RELEASE',
     head_tr:'Hikaye,\nbağlamıyla.',head_en:'The story,\nin context.',
     body_tr:'Resmi basın açıklaması için profesyonel alan.',
     body_en:'A professionally structured space for the press release.',
     sec_tr:'',sec_en:'',
     media:'',media_type:'image',media_pos:'center center',
     opacity:18,gradient:80,parallax:25,align:'left',
     fg:'',fg_type:'image',fg_w:50,fg_pos:'right'},
    {id:'brand',vis:true,preset:'statement',
     kicker_tr:'02 / KURUMSAL KİMLİK',kicker_en:'02 / BRAND',
     head_tr:'Tek kimlik.\nKüresel ses.',head_en:'One identity.\nGlobal voice.',
     body_tr:'USHAŞ, Türkiye\'nin sağlık turizmini uluslararası arenaya taşıyan lider kurumdur.',
     body_en:'USHAŞ is the leading institution taking Turkey\'s health tourism to the international stage.',
     sec_tr:'Türkiye · Sağlık · Küresel',sec_en:'Turkey · Healthcare · Global',
     media:'/images/brand.png',media_type:'image',media_pos:'center center',
     opacity:0,gradient:40,parallax:30,align:'left',
     fg:'',fg_type:'image',fg_w:55,fg_pos:'right',light:true},
    {id:'services',vis:true,preset:'split',
     kicker_tr:'03 / HİZMETLER',kicker_en:'03 / SERVICES',
     head_tr:'Detayları\ngörünür kıl.',head_en:'Make the\ndetails visible.',
     body_tr:'Uluslararası sağlık turizmi aracılık hizmetleri ve yetki belgesi süreçleri.',
     body_en:'International health tourism intermediary services and authorization processes.',
     sec_tr:'HEDEF KİTLE\nUluslararası paydaşlar',sec_en:'TARGET\nInternational stakeholders',
     media:'',media_type:'image',media_pos:'center center',
     opacity:18,gradient:35,parallax:28,align:'left',
     fg:'/images/services.png',fg_type:'image',fg_w:52,fg_pos:'right'},
    {id:'gallery',vis:true,preset:'gallery',
     kicker_tr:'04 / MEDYA',kicker_en:'04 / MEDIA',
     head_tr:'Etkiyle\nkonuşan\ngörseller.',head_en:'Visuals that\nspeak with\nimpact.',
     body_tr:'Yüksek çözünürlüklü fotoğraflar ve medya kaynakları.',
     body_en:'High-resolution photography and media resources.',
     sec_tr:'',sec_en:'',
     media:'',media_type:'image',media_pos:'center center',
     opacity:10,gradient:20,parallax:15,align:'left',
     fg:'',fg_type:'image',fg_w:50,fg_pos:'right'}
  ]
};

function jc(x){return JSON.parse(JSON.stringify(x))}
function esc(x){return String(x==null?'':x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function raw(x){return String(x==null?'':x)}
function isVideo(u){return /\.(mp4|webm|mov|m4v)(?:[?#]|$)/i.test(String(u||''))||/^data:video\//i.test(String(u||''))}
function ytId(u){
  var raw=String(u||'').trim(); if(!raw) return '';
  try{
    var base=(typeof location!=='undefined'&&/^https?:$/.test(location.protocol))?location.href:'http://localhost/';
    var x=new URL(raw,base),h=x.hostname.toLowerCase().replace(/^www\./,''),m='';
    if(h==='youtu.be') m=x.pathname.split('/').filter(Boolean)[0]||'';
    else if(h==='youtube.com'||h==='m.youtube.com'||h==='youtube-nocookie.com'){
      m=x.searchParams.get('v')||'';
      if(!m){var p=x.pathname.split('/').filter(Boolean); for(var z=0;z<p.length-1;z++){if(p[z]==='embed'||p[z]==='shorts'||p[z]==='live'||p[z]==='v'){m=p[z+1];break}}}
    }
    if(m && /^[A-Za-z0-9_-]{6,}$/.test(m)) return m;
  }catch(e){}
  var r=raw.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*?&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
  return r?r[1]:'';
}
function vmId(u){
  var raw=String(u||'').trim(); if(!raw) return '';
  try{
    var base=(typeof location!=='undefined'&&/^https?:$/.test(location.protocol))?location.href:'http://localhost/';
    var x=new URL(raw,base),h=x.hostname.toLowerCase().replace(/^www\./,'');
    if(h==='vimeo.com'||h==='player.vimeo.com'){var p=x.pathname.split('/').filter(Boolean); for(var i=p.length-1;i>=0;i--){if(/^\d+$/.test(p[i])) return p[i]}}
  }catch(e){}
  var r=raw.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(?:video\/)?(\d+)/i); return r?r[1]:'';
}
function dmId(u){
  var raw=String(u||'').trim(); if(!raw) return '';
  try{
    var base=(typeof location!=='undefined'&&/^https?:$/.test(location.protocol))?location.href:'http://localhost/';
    var x=new URL(raw,base),h=x.hostname.toLowerCase().replace(/^www\./,'');
    if(h==='dai.ly') return x.pathname.split('/').filter(Boolean)[0]||'';
    if(h==='dailymotion.com'){var p=x.pathname.split('/').filter(Boolean),k=p.indexOf('video'); if(k>=0) return (p[k+1]||'').split('_')[0]||''}
  }catch(e){}
  var r=raw.match(/(?:dai\.ly\/|dailymotion\.com\/video\/)([A-Za-z0-9]+)/i); return r?r[1]:'';
}
function mediaProvider(u){return ytId(u)?'youtube':(vmId(u)?'vimeo':(dmId(u)?'dailymotion':(isVideo(u)?'file':'image')))}
function mediaEmbed(u,opt){
  opt=opt||{};
  var y=ytId(u),v=vmId(u),d=dmId(u);
  var origin=(typeof location!=='undefined'&&/^https?:$/.test(location.protocol))?location.origin:'';
  var ref=(typeof location!=='undefined'&&/^https?:$/.test(location.protocol))?location.href:'';
  if(y){
    // Local wrapper guarantees that YouTube receives a normal HTTP Referer
    // from an enclosing HTTP page instead of relying on a dynamically-created
    // document/blob URL. This is important for YouTube error 153.
    if(opt.localWrapper!==false && origin){
      var qp=['id='+encodeURIComponent(y)];
      if(opt.controls!==undefined)qp.push('controls='+(opt.controls===false?'0':'1'));
      if(opt.autoplay)qp.push('autoplay=1');
      if(opt.muted)qp.push('muted=1');
      if(opt.loop)qp.push('loop=1');
      if(opt.background)qp.push('background=1');
      return origin+'/youtube-player.html?'+qp.join('&');
    }
    var q=['playsinline=1','rel=0','modestbranding=1','controls='+(opt.controls===false?'0':'1')];
    if(opt.autoplay){q.push('autoplay=1','mute=1');}
    if(opt.loop){q.push('loop=1','playlist='+encodeURIComponent(y));}
    if(opt.api)q.push('enablejsapi=1');
    if(origin && origin!=='null')q.push('origin='+encodeURIComponent(origin));
    if(ref)q.push('widget_referrer='+encodeURIComponent(ref));
    return 'https://www.youtube.com/embed/'+y+'?'+q.join('&');
  }
  if(v){
    var vq=['title=0','byline=0','portrait=0','playsinline=1','dnt=1'];
    if(opt.background)vq.push('autoplay=1','muted=1','loop=1','background=1','controls=0');
    else if(opt.autoplay)vq.push('autoplay=1');
    if(opt.controls===false)vq.push('controls=0');
    return 'https://player.vimeo.com/video/'+v+'?'+vq.join('&');
  }
  if(d){
    var dq=['ui-logo=0','sharing-enable=0'];
    if(opt.autoplay)dq.push('autoplay=1','mute=1');
    if(opt.loop)dq.push('loop=1');
    if(opt.controls===false)dq.push('controls=0');
    return 'https://geo.dailymotion.com/player.html?video='+encodeURIComponent(d)+'&'+dq.join('&');
  }
  return String(u||'');
}
function mediaIsVideo(u,type){var p=mediaProvider(u);return type==='video'||p==='youtube'||p==='vimeo'||p==='dailymotion'||p==='file'}
function isIDB(u){return /^idb:\/\//.test(String(u||''))}
var __gmsBlobUrls={};
function resolveMedia(u){
  if(!isIDB(u))return Promise.resolve(u);
  var key=String(u).slice(6);
  if(__gmsBlobUrls[key])return Promise.resolve(__gmsBlobUrls[key]);
  return new Promise(function(ok){
    try{
      var q=indexedDB.open('gms-media-v1',1);
      q.onupgradeneeded=function(){if(q.result.objectStoreNames&&!q.result.objectStoreNames.contains('files'))q.result.createObjectStore('files')};
      q.onsuccess=function(){
        var db=q.result;
        try{
          var req=db.transaction('files','readonly').objectStore('files').get(key);
          req.onsuccess=function(){
            var val=req.result;
            if(!val){ok(u);return}
            try{
              var blob=val.blob||val;
              var type=val.type||blob.type||'';
              if(blob && typeof blob==='object' && blob.size!=null){
                var obj=URL.createObjectURL(type && blob.type!==type ? new Blob([blob],{type:type}) : blob);
                __gmsBlobUrls[key]=obj;
                ok(obj);
              }else ok(u);
            }catch(e){ok(u)}
          };
          req.onerror=function(){ok(u)};
        }catch(e){ok(u)}
      };
      q.onerror=function(){ok(u)};
    }catch(e){ok(u)}
  });
}
function hydrateMedia(root){
  root=root||document;
  var ns=root.querySelectorAll('[data-gms-src],[data-gms-bg],[data-gms-iframe]');
  return Promise.all([].map.call(ns,function(n){
    var u=n.getAttribute('data-gms-src')||n.getAttribute('data-gms-bg')||n.getAttribute('data-gms-iframe');
    if(!isIDB(u))return Promise.resolve();
    return resolveMedia(u).then(function(x){
      if(n.hasAttribute('data-gms-bg')){
        if(/^blob:/.test(x)||/^https?:/.test(x))n.style.backgroundImage="url('"+x.replace(/'/g,'%27')+"')";
      }else{
        n.src=x;
        if(n.tagName==='VIDEO'){
          try{n.load()}catch(e){}
        }
      }
    });
  }));
}


function merge(def,val){
  if(Array.isArray(def))return Array.isArray(val)?val:jc(def);
  if(def&&typeof def==='object'){
    var out={};var src=(val&&typeof val==='object')?val:{};
    Object.keys(def).forEach(function(k){out[k]=merge(def[k],src[k])});
    Object.keys(src).forEach(function(k){if(!(k in out))out[k]=src[k]});
    return out;
  }
  return val===undefined?def:val;
}
function load(){
  try{var x=localStorage.getItem(KEY);return x?merge(D,JSON.parse(x)):jc(D)}catch(e){return jc(D)}
}

function build(S,opts){
  opts=opts||{};
  var origin=opts.origin||'';
  function abs(u){u=raw(u);return (origin&&u.charAt(0)==='/'&&u.charAt(1)!=='/')?origin+u:u}
  var d=S.design||{};
  var red=d.red||'#C8102E',red2=d.red2||'#FF3542',ink=d.ink||'#0B0C0E',font=d.font||"'Inter',Arial,sans-serif";
  var lang=S.site.lang||'both';
  var both=lang==='both';
  var one=both?'tr':lang;

  function pick(obj,key,l){return raw(obj[key+'_'+l]||obj[key+'_tr']||obj[key+'_en']||'')}
  function fmt(v,mode){return mode==='html'?raw(v).replace(/\n/g,'<br>'):esc(v).replace(/\n/g,'<br>')}
  function T(obj,key,mode){
    if(!both)return fmt(pick(obj,key,one),mode);
    var a=pick(obj,key,'tr'),b=pick(obj,key,'en');
    if(a===b)return fmt(a,mode);
    return '<span data-l="tr">'+fmt(a,mode)+'</span><span data-l="en" hidden>'+fmt(b,mode)+'</span>';
  }
  function L(trS,enS){
    if(!both)return esc(one==='en'?enS:trS);
    return '<span data-l="tr">'+esc(trS)+'</span><span data-l="en" hidden>'+esc(enS)+'</span>';
  }
  function has(obj,key){return !!(raw(obj[key+'_tr'])||raw(obj[key+'_en']))}
  function alignCls(a){return 'al-'+(a||'left')}

  var hero=S.hero;
  var heroProvider=mediaProvider(hero.media);
  var heroVideoEnabled=mediaIsVideo(hero.media,hero.media_type);
  var heroBg=hero.media&&!heroVideoEnabled?
    (isIDB(hero.media)?'':"background-image:url('"+esc(abs(hero.media))+"');")+'background-position:'+esc(hero.media_pos||'center')+';':'';
  var heroVideo='';
  if(hero.media&&heroVideoEnabled){
    heroVideo=(heroProvider==='youtube'||heroProvider==='vimeo'||heroProvider==='dailymotion')?
      '<iframe class="vbg-frame" data-gms-iframe="'+esc(mediaEmbed(hero.media,{autoplay:true,muted:true,loop:true,background:true,controls:false,api:true}))+'" src="'+esc(mediaEmbed(hero.media,{autoplay:true,muted:true,loop:true,background:true,controls:false,api:true}))+'" title="Background video" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>':
      '<video class="vbg" data-gms-src="'+esc(abs(hero.media))+'" src="'+esc(abs(hero.media))+'" autoplay muted loop playsinline controls></video>';
  }

  var visible=S.sections.filter(function(s){return s.vis});

  var secHTML=visible.map(function(s){
    var op=((+s.opacity||0)/100).toFixed(2);
    var gop=((+s.gradient||0)/100).toFixed(2);
    var secProvider=mediaProvider(s.media);
    var secVideoEnabled=mediaIsVideo(s.media,s.media_type);
    var bgCSS=s.media&&!secVideoEnabled?
      (isIDB(s.media)?'':"background-image:url('"+esc(abs(s.media))+"');")+'background-position:'+esc(s.media_pos||'center')+';':'';
    var videoBG='';
    if(s.media&&secVideoEnabled){
      videoBG=(secProvider==='youtube'||secProvider==='vimeo'||secProvider==='dailymotion')?
        '<iframe class="sec-vbg-frame" data-gms-iframe="'+esc(mediaEmbed(s.media,{autoplay:true,muted:true,loop:true,background:true,controls:false,api:true}))+'" src="'+esc(mediaEmbed(s.media,{autoplay:true,muted:true,loop:true,background:true,controls:false,api:true}))+'" title="Section video" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>':
        '<video class="sec-vbg" data-gms-src="'+esc(abs(s.media))+'" src="'+esc(abs(s.media))+'" autoplay muted loop playsinline controls></video>';
    }
    var darkBg=!!s.media&&!s.light;
    var dimOv=s.media?'<div class="sec-ov" style="background:rgba(0,0,0,'+op+')"></div>':'';
    var kicker='<div class="kicker">'+T(s,'kicker')+'</div>';
    var head='<h2>'+T(s,'head','html')+'</h2>';
    var body=has(s,'body')?'<div class="body"><p>'+T(s,'body')+'</p></div>':'';
    var sec2=has(s,'sec')?'<div class="sec2">'+T(s,'sec')+'</div>':'';
    var fgHTML='';
    if(s.fg){
      var fgProvider=mediaProvider(s.fg);
      var fgVideoEnabled=mediaIsVideo(s.fg,s.fg_type);
      if(fgVideoEnabled&&(fgProvider==='youtube'||fgProvider==='vimeo'||fgProvider==='dailymotion')) fgHTML='<iframe class="fg-media fg-frame" data-gms-iframe="'+esc(mediaEmbed(s.fg,{controls:true,api:true}))+'" src="'+esc(mediaEmbed(s.fg,{controls:true,api:true}))+'" title="Media video" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
      else if(fgVideoEnabled) fgHTML='<video class="fg-media" data-gms-src="'+esc(abs(s.fg))+'" src="'+esc(abs(s.fg))+'" controls playsinline preload="metadata"></video>';
      else fgHTML='<img class="fg-media" data-gms-src="'+esc(abs(s.fg))+'" src="'+(isIDB(s.fg)?'':esc(abs(s.fg)))+'" alt="">';
    }
    var fgFloat='';
    if(s.fg){
      var fp=s.fg_pos||'right';
      var w=Math.max(10,Math.min(100,+s.fg_w||50));
      fgFloat='<div class="fg-float fg-'+esc(fp)+'" style="width:'+w+'%">'+fgHTML+'</div>';
    }
    var bgLayer='<div class="sec-bg" style="'+bgCSS+'" '+(s.media&&!secVideoEnabled?'data-gms-bg="'+esc(abs(s.media))+'"':'')+' data-parallax="'+(+s.parallax||0)+'"></div>'+videoBG;
    var id=esc(s.id);
    var cls=darkBg?' on-dark':'';

    if(s.preset==='redband'){
      return '<section class="sec redband" id="'+id+'">'+bgLayer+
        '<div class="sec-ov" style="background:linear-gradient(135deg,'+red+','+red2+');opacity:'+gop+'"></div>'+
        '<div class="wrap sec-in '+alignCls(s.align)+' rv">'+kicker+head+
        '<div class="rb-split">'+body+sec2+'</div></div>'+fgFloat+'</section>';
    }
    if(s.preset==='statement'){
      return '<section class="sec story'+cls+'" id="'+id+'">'+bgLayer+
        dimOv+
        '<div class="wrap sec-in '+alignCls(s.align)+' rv">'+kicker+'<div class="stmt">'+head+body+sec2+'</div></div></section>';
    }
    if(s.preset==='split'||s.preset==='media-split'){
      var media=fgHTML||(s.preset==='media-split'?'<div class="media-ph"></div>':'');
      var rev=(s.fg_pos==='left')?' rev':'';
      return '<section class="sec story'+cls+'" id="'+id+'">'+bgLayer+
        dimOv+
        '<div class="wrap sec-in '+alignCls(s.align)+' rv">'+kicker+
        '<div class="spl'+(media?'':' solo')+rev+'"><div class="spl-copy">'+head+body+sec2+'</div>'+
        (media?'<div class="spl-media">'+media+'</div>':'')+'</div></div></section>';
    }
    if(s.preset==='gallery'){
      var gals=S.gal_items.length?
        S.gal_items.map(function(g,i){
          return '<figure class="'+(i===0?'gw':'')+'" tabindex="0" role="button" aria-label="'+esc(g.cap||('Görsel '+(i+1)))+'" data-i="'+i+'">'+
            '<img data-gms-src="'+esc(abs(g.url))+'" src="'+(isIDB(g.url)?'':esc(abs(g.url)))+'" alt="'+esc(g.cap||'')+'" loading="lazy">'+
            '</figure>';
        }).join(''):
        '<figure class="gal-empty">'+L('Galeri görselleri admin panelinden ekleyin','Add gallery images from the admin panel')+'</figure>';
      return '<section class="sec story'+cls+'" id="'+id+'">'+bgLayer+
        dimOv+
        '<div class="wrap sec-in '+alignCls(s.align)+' rv">'+kicker+
        '<div class="gal-head">'+head+body+'</div>'+
        '<div class="gal">'+gals+'</div></div></section>';
    }
    if(s.preset==='fullmedia'){
      return '<section class="sec fullmedia" id="'+id+'">'+bgLayer+
        '<div class="sec-ov" style="background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.65))"></div>'+
        '<div class="wrap sec-in '+alignCls(s.align||'center')+' rv">'+kicker+head+body+'</div></section>';
    }
    return '';
  }).join('\n');

  var ct=S.contact;
  var cardLines=
    (ct.email?'<div class="cc-line"><b>'+L('E-POSTA','EMAIL')+'</b><a href="mailto:'+esc(ct.email)+'">'+esc(ct.email)+'</a></div>':'')+
    (ct.phone?'<div class="cc-line"><b>'+L('TELEFON','PHONE')+'</b><a href="tel:'+esc(String(ct.phone).replace(/[^\d+]/g,''))+'">'+esc(ct.phone)+'</a></div>':'')+
    (ct.org?'<div class="cc-line"><b>'+L('KURUM','ORG')+'</b>'+esc(ct.org)+'</div>':'')+
    (ct.web?'<div class="cc-line"><b>WEB</b><a href="'+esc(ct.web)+'" target="_blank" rel="noopener noreferrer">'+esc(ct.web.replace(/^https?:\/\//,''))+'</a></div>':'');
  var form=ct.email?
    '<form class="ct-form" id="ct-form" data-to="'+esc(ct.email)+'">'+
      '<div class="cf-title">'+L('MESAJ GÖNDERİN','SEND A MESSAGE')+'</div>'+
      '<label><span>'+L('Ad Soyad','Full name')+'</span><input name="name" required autocomplete="name"></label>'+
      '<label><span>'+L('E-posta','Email')+'</span><input name="email" type="email" required autocomplete="email"></label>'+
      '<label><span>'+L('Mesaj','Message')+'</span><textarea name="msg" rows="4" required></textarea></label>'+
      '<button type="submit">'+L('GÖNDER','SEND')+'</button>'+
    '</form>':'';
  var ctHTML='<section class="sec redband" id="contact">'+
    '<div class="sec-ov" style="background:linear-gradient(135deg,'+red+','+red2+');opacity:.95"></div>'+
    '<div class="wrap sec-in rv"><div class="kicker">'+T(ct,'kicker')+'</div>'+
    '<div class="ct-grid"><div class="ct-copy"><h2>'+T(ct,'title','html')+'</h2><p>'+T(ct,'body')+'</p></div>'+
    '<div class="ct-card">'+(ct.name?'<div class="cc-name">'+esc(ct.name)+'</div>':'')+
    '<div class="cc-role">'+T(ct,'role')+'</div>'+cardLines+form+'</div></div></div></section>';

  function navLabel(s,l){return pick(s,'kicker',l).split('/').pop().trim()}
  var nav=visible.map(function(s){
    var a=navLabel(s,'tr'),b=navLabel(s,'en');
    return '<a href="#'+esc(s.id)+'">'+(both?L(a,b):esc(navLabel(s,one)))+'</a>';
  }).join('');

  var logoHTML=S.site.logo_url?
    '<img src="'+esc(abs(S.site.logo_url))+'" alt="'+esc(S.site.logo_text||'')+'" class="logo-img">':
    '<span class="logo-mark">'+esc((S.site.logo_text||'U').charAt(0))+'</span><span class="logo-text">'+esc(S.site.logo_text||'USHAŞ')+'</span>';

  var langSwitch=both?
    '<div class="fl-switch" role="group" aria-label="Dil / Language">'+
    '<button type="button" class="fl-btn on" data-set="tr">TR</button>'+
    '<button type="button" class="fl-btn" data-set="en">EN</button></div>':'';

  var titleTR=raw(S.site.title_tr||S.site.name_tr||'USHAŞ');
  var titleEN=raw(S.site.title_en||S.site.name_en||'USHAŞ');
  var descTR=raw(S.site.desc_tr),descEN=raw(S.site.desc_en);
  var pageTitle=one==='en'?titleEN:titleTR;
  var heroOp=((+hero.opacity||0)/100).toFixed(2);
  var heroGr=((+hero.gradient||0)/100).toFixed(2);
  var meta=JSON.stringify({title:{tr:titleTR,en:titleEN},desc:{tr:descTR,en:descEN},both:both,live:!!opts.live,key:KEY}).replace(/</g,'\\u003c');

  return '<!doctype html>\n<html lang="'+(one==='en'?'en':'tr')+'">\n<head>\n<meta charset="utf-8">\n'+
'<meta name="viewport" content="width=device-width,initial-scale=1">\n'+
'<meta name="theme-color" content="'+esc(ink)+'">\n'+
'<title>'+esc(pageTitle)+'</title>\n'+
'<meta name="description" content="'+esc(one==='en'?descEN:descTR)+'">\n'+
'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'+
'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">\n'+
'<style>\n'+
':root{--red:'+red+';--red2:'+red2+';--ink:'+ink+';--font:'+font+';--max:1300px}\n'+
'*{box-sizing:border-box;margin:0;padding:0}\n'+
'[hidden]{display:none!important}\n'+
'html{scroll-behavior:smooth}\n'+
'body{font-family:var(--font);color:var(--ink);background:#fff;overflow-x:hidden;-webkit-font-smoothing:antialiased}\n'+
'a{color:inherit;text-decoration:none}\n'+
'img{max-width:100%;display:block}\n'+
'.topbar{position:fixed;top:0;left:0;right:0;z-index:100;transition:background .3s,backdrop-filter .3s}\n'+
'.topbar.sc,.topbar.open{background:rgba(11,12,14,.94);backdrop-filter:blur(14px)}\n'+
'.topin{height:80px;display:flex;align-items:center;justify-content:space-between;padding:0 40px;gap:20px}\n'+
'.logo-wrap{display:flex;align-items:center;gap:10px;color:#fff}\n'+
'.logo-mark{width:32px;height:32px;background:var(--red);border-radius:4px;display:grid;place-items:center;font-size:13px;font-weight:900}\n'+
'.logo-text{font-size:14px;font-weight:900;letter-spacing:.3px}\n'+
'.logo-img{height:36px;object-fit:contain}\n'+
'.nav-links{display:flex;align-items:center;gap:24px;font-size:10px;letter-spacing:1.5px;font-weight:800;color:rgba(255,255,255,.7)}\n'+
'.nav-links a{transition:color .15s}\n'+
'.nav-links a:hover,.nav-links a.act{color:#fff}\n'+
'.nav-cta{background:var(--red);color:#fff!important;padding:10px 16px;letter-spacing:1.4px;font-weight:900;border-radius:2px;transition:background .15s}\n'+
'.nav-cta:hover{background:var(--red2)}\n'+
'.menu-btn{display:none;background:none;border:1px solid rgba(255,255,255,.3);color:#fff;width:40px;height:40px;border-radius:4px;cursor:pointer;align-items:center;justify-content:center}\n'+
'.menu-btn span,.menu-btn span::before,.menu-btn span::after{display:block;width:18px;height:2px;background:#fff;position:relative;transition:transform .2s}\n'+
'.menu-btn span::before,.menu-btn span::after{content:"";position:absolute;left:0}\n'+
'.menu-btn span::before{top:-6px}.menu-btn span::after{top:6px}\n'+
'.open .menu-btn span{background:transparent}.open .menu-btn span::before{transform:translateY(6px) rotate(45deg)}.open .menu-btn span::after{transform:translateY(-6px) rotate(-45deg)}\n'+
'.fl-switch{display:flex;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:4px;overflow:hidden}\n'+
'.fl-btn{padding:6px 11px;font-size:10px;font-weight:800;cursor:pointer;color:rgba(255,255,255,.6);background:none;border:none;transition:all .12s;letter-spacing:.5px;font-family:inherit}\n'+
'.fl-btn.on{background:var(--red);color:#fff}\n'+
'.wrap{width:min(var(--max),calc(100% - 80px));margin:0 auto}\n'+
'.al-left{text-align:left}.al-center{text-align:center}.al-right{text-align:right}\n'+
'.al-center .kicker{justify-content:center}.al-right .kicker{justify-content:flex-end}\n'+
'.al-center .stmt,.al-center .sub,.al-center .gal-head{margin-left:auto;margin-right:auto}\n'+
'.al-right .stmt,.al-right .sub{margin-left:auto}\n'+
'.hero{height:100svh;min-height:640px;position:relative;overflow:hidden;color:#fff;display:flex;align-items:flex-end;background:#000}\n'+
'.hero-bg{position:absolute;inset:-12%;background:linear-gradient(135deg,'+red+','+red2+');background-size:cover;background-repeat:no-repeat;will-change:transform;z-index:0}\n'+
'.hero video.vbg,.hero .vbg-frame{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;border:0}\n'+
'.hero-dim{position:absolute;inset:0;z-index:1;background:#000;opacity:'+heroOp+'}\n'+
'.hero-ov{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,.05) 40%,rgba(0,0,0,.7) 100%)}\n'+
'.hero-grad{position:absolute;inset:0;z-index:1;background:linear-gradient(135deg,'+red+','+red2+');opacity:'+heroGr+';mix-blend-mode:multiply}\n'+
'.hero-in{position:relative;z-index:3;padding:0 40px 90px;max-width:var(--max);margin:0 auto;width:100%}\n'+
'.kicker{font-size:10px;letter-spacing:3px;font-weight:900;color:rgba(255,255,255,.85);margin-bottom:20px;display:flex;align-items:center;gap:12px}\n'+
'.kicker::before{content:"";display:inline-block;width:32px;height:1px;background:var(--red);flex-shrink:0}\n'+
'.hero h1{font-size:clamp(56px,9.5vw,145px);line-height:.87;letter-spacing:-.045em;margin-bottom:28px;font-weight:900}\n'+
'.hero .sub{font-size:clamp(15px,1.5vw,19px);line-height:1.65;color:rgba(255,255,255,.85);max-width:620px;margin-bottom:34px}\n'+
'.hero-cta{display:inline-flex;align-items:center;gap:10px;background:var(--red);color:#fff;padding:14px 22px;font-size:10px;letter-spacing:1.8px;font-weight:900;transition:background .15s,gap .15s}\n'+
'.hero-cta:hover{background:var(--red2);gap:14px}\n'+
'.hero-cta::after{content:"\\2192";font-size:14px}\n'+
'.scroll-hint{position:absolute;right:38px;bottom:32px;font-size:9px;letter-spacing:2.5px;color:rgba(255,255,255,.5);writing-mode:vertical-rl;z-index:4}\n'+
'.sec .sec-in{width:var(--sec-text-width,100%) !important;max-width:var(--sec-content-width,1200px) !important;box-sizing:border-box;margin-left:auto!important;margin-right:auto!important;min-width:0}\n'+
'.sec .stmt,.sec .body{width:100%;max-width:100%;min-width:0;box-sizing:border-box}\n'+
'.sec .body p{width:100%;max-width:100%;margin-left:0;margin-right:0;box-sizing:border-box;white-space:normal;overflow-wrap:break-word;word-break:normal;text-align:var(--sec-body-align,left)!important;text-align-last:auto}\n'+
'.sec{position:relative;overflow:hidden;padding:130px 0;background:#fff}\n'+
'.sec-bg{position:absolute;inset:-14%;background-size:cover;background-repeat:no-repeat;will-change:transform;z-index:0}\n'+
'.sec-vbg,.sec-vbg-frame{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;border:0}\n'+
'.sec-ov{position:absolute;inset:0;z-index:1;pointer-events:none}\n'+
'.sec-in{position:relative;z-index:2}\n'+
'.fg-float{position:absolute;top:0;bottom:0;z-index:1;overflow:hidden;opacity:.35}\n'+
'.fg-float .fg-media{width:100%;height:100%;object-fit:cover}\n'+
'.fg-right{right:0}.fg-left{left:0}.fg-center{left:50%;transform:translateX(-50%)}\n'+
'.media-ph{min-height:400px;background:rgba(0,0,0,.08);border-radius:2px}\n'+
'.sec .kicker{color:var(--red)}\n'+
'.redband .kicker,.on-dark .kicker,.fullmedia .kicker{color:rgba(255,255,255,.85)}\n'+
'.redband .kicker::before{background:rgba(255,255,255,.5)}\n'+
'h2{font-size:clamp(40px,6vw,88px);line-height:.9;letter-spacing:-.045em;margin-bottom:28px;color:var(--ink);font-weight:900}\n'+
'.redband h2,.fullmedia h2,.on-dark h2{color:#fff}\n'+
'.body p{font-size:clamp(16px,1.4vw,20px);line-height:1.75;max-width:640px}\n'+
'.al-center .body p{margin:0 auto}.al-right .body p{margin-left:auto}\n'+
'.redband .body p,.fullmedia .body p,.on-dark .body p{color:rgba(255,255,255,.88)}\n'+
'.sec2{margin-top:24px;padding-top:20px;border-top:1px solid currentColor;font-size:12px;line-height:1.9;opacity:.65;letter-spacing:.5px}\n'+
'.on-dark .sec2,.redband .sec2{color:#fff}\n'+
'.spl{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;margin-top:14px}\n'+
'.spl.solo{grid-template-columns:1fr}\n'+
'.spl.rev .spl-media{order:-1}\n'+
'.spl-media{min-height:480px;overflow:hidden;position:relative;border-radius:2px;background:#eee}\n'+
'.spl-media img,.spl-media video,.spl-media iframe{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0}\n'+
'.stmt{max-width:960px}\n'+
'.stmt h2{font-size:clamp(46px,7.5vw,105px)}\n'+
'.rb-split{display:grid;grid-template-columns:1fr 1fr;gap:60px;margin-top:14px;align-items:start}\n'+
'.gal-head{max-width:820px}\n'+
'.gal{display:grid;grid-template-columns:1.3fr 1fr 1fr;grid-auto-rows:270px;gap:8px;margin-top:40px}\n'+
'.gal figure{margin:0;position:relative;overflow:hidden;background:#ddd;cursor:zoom-in;outline:none}\n'+
'.gal figure:focus-visible{box-shadow:0 0 0 3px var(--red)}\n'+
'.gal figure.gw{grid-row:span 2}\n'+
'.gal img{width:100%;height:100%;object-fit:cover;transition:transform .6s}\n'+
'.gal figure:hover img{transform:scale(1.05)}\n'+
'.gal figcaption{position:absolute;left:14px;bottom:12px;color:#fff;font-size:10px;font-weight:800;z-index:2;letter-spacing:1px}\n'+'.gal figcaption,.gal figure figcaption,.gal .caption,.gal [class*=caption]{display:none!important;visibility:hidden!important;opacity:0!important}\n'+
'.gal figure::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 45%,rgba(0,0,0,.55))}\n'+
'.gal .gal-empty{grid-column:1/-1;display:grid;place-items:center;color:#888;font-size:14px;min-height:200px;cursor:default}\n'+
'.gal .gal-empty::after{display:none}\n'+
'.lb{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:60px 70px}\n'+
'.lb img{max-width:100%;max-height:100%;object-fit:contain}\n'+
'.lb-cap{position:absolute;bottom:22px;left:0;right:0;text-align:center;color:#fff;font-size:11px;letter-spacing:1.5px;font-weight:800}\n'+
'.lb button{position:absolute;background:rgba(255,255,255,.1);border:none;color:#fff;width:46px;height:46px;border-radius:50%;cursor:pointer;font-size:20px;font-family:inherit}\n'+
'.lb button:hover{background:var(--red)}\n'+
'.lb-x{top:18px;right:18px}.lb-p{left:14px;top:50%;transform:translateY(-50%)}.lb-n{right:14px;top:50%;transform:translateY(-50%)}\n'+
'.fullmedia{min-height:80vh;display:flex;align-items:center;color:#fff;background:#000}\n'+
'.redband{color:#fff;padding:120px 0;background:var(--red)}\n'+
'.ct-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:80px;align-items:start;margin-top:18px}\n'+
'.ct-copy h2{color:#fff;font-size:clamp(46px,7vw,100px)}\n'+
'.ct-copy p{color:rgba(255,255,255,.85);font-size:17px;line-height:1.7;margin-top:14px;max-width:520px}\n'+
'.ct-card{background:#fff;color:#111;padding:34px;border-top:3px solid var(--ink);border-radius:2px}\n'+
'.cc-name{font-size:22px;font-weight:800;margin-bottom:3px}\n'+
'.cc-role{font-size:10px;color:var(--red);font-weight:900;letter-spacing:1.4px;margin-bottom:20px}\n'+
'.cc-line{padding:12px 0;border-top:1px solid #eee;font-size:14px;display:flex;gap:12px;align-items:baseline;word-break:break-word}\n'+
'.cc-line a:hover{color:var(--red)}\n'+
'.cc-line b{font-size:9px;letter-spacing:1.3px;color:#888;font-weight:900;min-width:64px;flex-shrink:0}\n'+
'.ct-form{display:flex;flex-direction:column;gap:12px;margin-top:22px;padding-top:22px;border-top:1px solid #eee}\n'+
'.cf-title{font-size:10px;font-weight:900;letter-spacing:1.4px}\n'+
'.ct-form label{display:flex;flex-direction:column;gap:5px;font-size:11px;font-weight:700;color:#555}\n'+
'.ct-form input,.ct-form textarea{font:inherit;font-size:14px;padding:10px 12px;border:1px solid #ddd;border-radius:2px;color:#111;background:#fafafa;resize:vertical}\n'+
'.ct-form input:focus,.ct-form textarea:focus{outline:none;border-color:var(--red);background:#fff}\n'+
'.ct-form button{background:var(--ink);color:#fff;border:none;padding:13px;font:inherit;font-size:10px;font-weight:900;letter-spacing:1.8px;cursor:pointer;border-radius:2px;transition:background .15s}\n'+
'.ct-form button:hover{background:var(--red)}\n'+
'footer{background:#0b0c0e;color:#777;padding:28px 0;font-size:10px;letter-spacing:1.5px}\n'+
'.foot{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}\n'+
'.foot a:hover{color:#fff}\n'+
'.rv{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease}\n'+
'.rv.in{opacity:1;transform:none}\n'+
'@media (prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}html{scroll-behavior:auto}}\n'+
'@media(max-width:880px){\n'+
'  .topin{padding:0 20px;height:64px}\n'+
'  .menu-btn{display:inline-flex}\n'+
'  .nav-links{display:none;position:absolute;top:64px;left:0;right:0;flex-direction:column;align-items:flex-start;gap:0;background:rgba(11,12,14,.97);padding:10px 20px 22px;font-size:12px}\n'+
'  .open .nav-links{display:flex}\n'+
'  .nav-links a{padding:13px 0;width:100%;border-bottom:1px solid rgba(255,255,255,.08)}\n'+
'  .nav-links .nav-cta{margin-top:14px;text-align:center;border:none}\n'+
'  .nav-links .fl-switch{margin-top:14px}\n'+
'  .hero-in{padding:0 20px 65px}\n'+
'  .wrap{width:calc(100% - 40px)}\n'+
'  .sec{padding:84px 0}\n'+
'  .spl,.rb-split,.ct-grid{grid-template-columns:1fr;gap:32px}\n'+
'  .spl.rev .spl-media{order:0}\n'+
'  .spl-media{min-height:340px}\n'+
'  .gal{grid-template-columns:1fr 1fr;grid-auto-rows:200px}\n'+
'  .gal figure.gw{grid-row:span 1;grid-column:1/-1}\n'+
'  .scroll-hint{display:none}\n'+
'  .fg-float{display:none}\n'+
'  .lb{padding:50px 10px}\n'+
'}\n'+
'@media(max-width:520px){.gal{grid-template-columns:1fr;grid-auto-rows:240px}.ct-card{padding:24px}}\n'+
'</style>\n</head>\n<body>\n'+
'<header class="topbar" id="tb"><div class="topin">'+
'<a class="logo-wrap" href="#top" aria-label="'+esc(S.site.logo_text||'USHAŞ')+'">'+logoHTML+'</a>'+
'<button type="button" class="menu-btn" id="menu-btn" aria-label="Menü" aria-expanded="false" aria-controls="nav"><span></span></button>'+
'<nav class="nav-links" id="nav" aria-label="Ana menü">'+nav+
'<a class="nav-cta" href="#contact">'+L('İLETİŞİM','CONTACT')+'</a>'+langSwitch+'</nav>'+
'</div></header>\n'+
'<main>\n'+
'<section class="hero" id="top">'+
'<div class="hero-bg" style="'+heroBg+'" '+(hero.media&&hero.media_type!=='video'?'data-gms-bg="'+esc(abs(hero.media))+'"':'')+' data-parallax="'+(+hero.parallax||0)+'"></div>'+heroVideo+
'<div class="hero-dim"></div><div class="hero-grad"></div><div class="hero-ov"></div>'+
'<div class="hero-in '+alignCls(hero.align)+'">'+
'<div class="kicker">'+T(hero,'kicker')+'</div>'+
'<h1>'+T(hero,'title','html')+'</h1>'+
'<p class="sub">'+T(hero,'sub')+'</p>'+
'<a class="hero-cta" data-hero-scroll="1" href="'+esc(((S.sections&&S.sections[0]&&S.sections[0].id)?'#'+S.sections[0].id:(hero.cta_url||'#contact')))+'">'+T(hero,'cta')+'</a>'+
'</div><div class="scroll-hint" aria-hidden="true">SCROLL</div></section>\n'+
secHTML+'\n'+ctHTML+'\n</main>\n'+
'<footer><div class="footer-brand-image" style="display:flex;justify-content:center;align-items:center;width:100%;padding:18px 20px 24px"><img src="uploads/2222.png" alt="HealthTürkiye" loading="lazy" style="display:block;width:var(--footer-brand-width,min(220px,42vw));height:auto;max-width:100%;object-fit:contain;object-position:center"></div><div class="wrap foot">'+
'<span>&copy; '+new Date().getFullYear()+' '+esc(S.site.logo_text||'USHAŞ')+'</span>'+
'<span>'+L('ULUSLARARASI SAĞLIK HİZMETLERİ','INTERNATIONAL HEALTH SERVICES')+'</span>'+
(ct.web?'<a href="'+esc(ct.web)+'" target="_blank" rel="noopener noreferrer">'+esc(ct.web.replace(/^https?:\/\//,''))+'</a>':'<span></span>')+
'</div></footer>\n'+
'<script>\n(function(){\n'+
'var M='+meta+';\n'+
'var tb=document.getElementById("tb");\n'+
'function onScroll(){tb.classList.toggle("sc",scrollY>70)}\n'+
'window.addEventListener("scroll",onScroll,{passive:true});onScroll();\n'+
'var mb=document.getElementById("menu-btn");\n'+
'mb.addEventListener("click",function(){var o=tb.classList.toggle("open");mb.setAttribute("aria-expanded",o)});\n'+
'document.querySelectorAll("#nav a").forEach(function(a){a.addEventListener("click",function(){tb.classList.remove("open");mb.setAttribute("aria-expanded","false")})});\n'+
'document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^=\\"#\\"]");if(!a)return;if(a.matches(".hero-cta,[data-hero-scroll]")){var first=document.querySelector("main .sec, main section:not(.hero)");if(first){e.preventDefault();first.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});return;}}var id=a.getAttribute("href").slice(1);var t=id?document.getElementById(id):null;if(t||id==="top"||!id){e.preventDefault();if(t)t.scrollIntoView({behavior:"smooth",block:"start"});else window.scrollTo({top:0,behavior:"smooth"});}});\n'+
'var px=[].slice.call(document.querySelectorAll("[data-parallax]"));\n'+
'var red=matchMedia("(prefers-reduced-motion: reduce)").matches;\n'+
'var tk=false;\n'+
'function para(){px.forEach(function(e){var p=+e.dataset.parallax||0;var r=e.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;var c=(r.top+r.height/2-innerHeight/2)/(innerHeight+r.height);e.style.transform="translate3d(0,"+(c*p*2.2)+"px,0)"});tk=false}\n'+
'if(!red&&px.length){window.addEventListener("scroll",function(){if(!tk){requestAnimationFrame(para);tk=true}},{passive:true});para()}\n'+
'var rv=[].slice.call(document.querySelectorAll(".rv"));\n'+
'if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}})},{threshold:.12});rv.forEach(function(e){io.observe(e)})}else rv.forEach(function(e){e.classList.add("in")});\n'+
'var links=[].slice.call(document.querySelectorAll("#nav a[href^=\\"#\\"]"));\n'+
'if("IntersectionObserver" in window){var so=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(l){l.classList.toggle("act",l.getAttribute("href")==="#"+en.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});document.querySelectorAll("main section[id]").forEach(function(s){so.observe(s)})}\n'+
'function setLang(l){\n'+
'  document.querySelectorAll("[data-l]").forEach(function(e){e.hidden=e.getAttribute("data-l")!==l});\n'+
'  document.querySelectorAll(".fl-btn").forEach(function(b){b.classList.toggle("on",b.dataset.set===l)});\n'+
'  document.documentElement.lang=l;document.title=M.title[l];\n'+
'  var md=document.querySelector("meta[name=description]");if(md)md.setAttribute("content",M.desc[l]);\n'+
'  try{localStorage.setItem(M.key+"-lang",l)}catch(e){}\n'+
'}\n'+
'if(M.both){document.querySelectorAll(".fl-btn").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.set)})});\n'+
'  var saved=null;try{saved=localStorage.getItem(M.key+"-lang")}catch(e){}\n'+
'  if(!saved){saved=(navigator.language||"tr").toLowerCase().indexOf("tr")===0?"tr":"en"}\n'+
'  setLang(saved==="en"?"en":"tr")}\n'+
'var figs=[].slice.call(document.querySelectorAll(".gal figure[data-i]"));\n'+
'var lb=null,cur=0;\n'+
'function show(i){cur=(i+figs.length)%figs.length;var f=figs[cur];var im=f.querySelector("img");lb.querySelector("img").src=im.src;lb.querySelector("img").alt=im.alt;var c=f.querySelector("figcaption");lb.querySelector(".lb-cap").textContent=c?c.textContent:""}\n'+
'function close(){if(lb){lb.remove();lb=null;document.body.style.overflow="";if(figs[cur])figs[cur].focus()}}\n'+
'function open(i){lb=document.createElement("div");lb.className="lb";lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");\n'+
'  lb.innerHTML="<img alt=\\"\\"><div class=\\"lb-cap\\"></div><button class=\\"lb-x\\" aria-label=\\"Kapat\\">&times;</button>"+(figs.length>1?"<button class=\\"lb-p\\" aria-label=\\"Önceki\\">&#8249;</button><button class=\\"lb-n\\" aria-label=\\"Sonraki\\">&#8250;</button>":"");\n'+
'  document.body.appendChild(lb);document.body.style.overflow="hidden";show(i);\n'+
'  lb.addEventListener("click",function(e){if(e.target===lb||e.target.classList.contains("lb-x"))close();else if(e.target.classList.contains("lb-p"))show(cur-1);else if(e.target.classList.contains("lb-n"))show(cur+1)});\n'+
'  lb.querySelector(".lb-x").focus()}\n'+
'figs.forEach(function(f,i){f.addEventListener("click",function(){open(i)});f.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open(i)}})});\n'+
'document.addEventListener("keydown",function(e){if(!lb)return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1)});\n'+
'var cf=document.getElementById("ct-form");\n'+
'if(cf)cf.addEventListener("submit",function(e){e.preventDefault();var fd=new FormData(cf);var sub=(document.documentElement.lang==="en"?"Message from ":"Mesaj: ")+fd.get("name");var body=fd.get("msg")+"\\n\\n— "+fd.get("name")+" <"+fd.get("email")+">";window.location.href="mailto:"+cf.dataset.to+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);cf.reset()});\n'+
'if(M.live)window.addEventListener("storage",function(e){if(e.key===M.key)location.reload()});\n'+
'})();\n<\/script>\n</body>\n</html>';
}

window.GMS={KEY:KEY,D:D,jc:jc,esc:esc,raw:raw,isVideo:isVideo,ytId:ytId,vmId:vmId,dmId:dmId,mediaProvider:mediaProvider,mediaEmbed:mediaEmbed,mediaIsVideo:mediaIsVideo,isIDB:isIDB,resolveMedia:resolveMedia,hydrateMedia:hydrateMedia,load:load,build:build};
})();

/* V14 ART-DIRECTION EXTENSION */
(function(){
  if(!window.GMS||!window.GMS.build)return;
  var _build=window.GMS.build;
  function escv(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
  function cssColor(v,f){return (typeof v==='string'&&/^#|^rgb|^hsl|^var\(/.test(v))?v:f}
  function themeFor(s,red,red2){
    var t=s.theme||((s.preset==='redband')?'red':(s.light?'white':'white'));
    var bg='#fff',fg='#0b0c0e';
    if(t==='soft'){bg='#f5f5f5'}
    else if(t==='red'){bg=red;fg='#fff'}
    else if(t==='red-gradient'){bg='linear-gradient(120deg,'+red+','+red2+')';fg='#fff'}
    else if(t==='dark'){bg='#0b0c0e';fg='#fff'}
    else if(t==='custom'){bg=s.bg_custom||'#fff';fg=s.text_color||'#0b0c0e'}
    return {bg:bg,fg:fg};
  }
  window.GMS.build=function(S,opts){
    var html=_build(S,opts||{}),d=S.design||{},red=d.red||'#C8102E',red2=d.red2||'#FF3542';
    var blocks=[];
    (S.sections||[]).forEach(function(s,i){
      var th=themeFor(s,red,red2),fg=cssColor(s.text_color,th.fg),head=cssColor(s.heading_color||s.head_color,fg),body=cssColor(s.body_color||s.text_color,fg),kick=cssColor(s.kicker_color,red);
      var hs=+s.headline_size||+s.head_size||0,bs=+s.body_size||0,ks=+s.kicker_size||0;
      var lh=(+s.line_height||1.65);if(lh>10)lh=lh/100;
      var ls=+s.letter_spacing||0;if(Math.abs(ls)>1)ls=ls/1000;
      var cmax=Math.max(420,Math.min(1920,+s.content_max||+s.content_width||1200));
      var tw=Math.max(30,Math.min(100,+s.text_width||100));var ba=['left','center','right','justify'].indexOf(s.body_align)>=0?s.body_align:'left';
      var pt=Math.max(40,Math.min(260,+s.pad_top||130)),pb=Math.max(40,Math.min(260,+s.pad_bottom||130));
      var mw=Math.max(25,Math.min(70,+s.media_width||50));
      var mop=Math.max(0,Math.min(1,(+s.opacity||0)/100));
      var gop=Math.max(0,Math.min(1,(+s.gradient||0)/100));
      var overlayOp=Math.max(0,Math.min(1,(+s.overlay_opacity||0)/100));
      var zoom=Math.max(100,Math.min(150,+s.bg_zoom||110));
      var radius=Math.max(0,Math.min(40,+s.media_radius||0));
      var selector='#'+String(s.id).replace(/[^a-zA-Z0-9_-]/g,'\\$&');
      var css=selector+'{background:'+th.bg+' !important;color:'+fg+' !important;padding-top:'+pt+'px !important;padding-bottom:'+pb+'px !important}';
      css+=selector+' .sec-in{width:'+tw+'% !important;max-width:'+cmax+'px !important;box-sizing:border-box !important;min-width:0 !important;margin-left:auto !important;margin-right:auto !important}';
      css+=selector+' .stmt,'+selector+' .body,'+selector+' .rb-split,'+selector+' .spl-copy{min-width:0 !important;box-sizing:border-box !important}';

      var tx=Math.max(-40,Math.min(40,+s.text_x||0)),ty=Math.max(-40,Math.min(40,+s.text_y||0));
      css+=selector+' .sec-in{max-width:'+cmax+'px !important;width:'+tw+'% !important;margin-left:auto !important;margin-right:auto !important;box-sizing:border-box !important;position:relative !important;left:'+tx+'% !important;top:'+ty+'px !important}';
      css+=selector+' .stmt,'+selector+' .body,'+selector+' .rb-split{width:100% !important;max-width:100% !important;min-width:0 !important;box-sizing:border-box !important}';
      css+=selector+' h2{color:'+head+' !important;font-weight:'+Math.max(300,Math.min(900,+s.font_weight||900))+' !important;'+(hs?'font-size:'+hs+'px !important;':'')+'letter-spacing:'+ls+'em !important}';
      css+=selector+' .body p{width:100% !important;max-width:100% !important;box-sizing:border-box !important;white-space:normal !important;overflow-wrap:break-word !important;color:'+body+' !important;line-height:'+lh+' !important;text-align:'+ba+' !important;text-align-last:auto !important;overflow-wrap:anywhere;'+(bs?'font-size:'+bs+'px !important;':'')+'}';
      css+=selector+' .kicker{color:'+kick+' !important;'+(ks?'font-size:'+ks+'px !important;':'')+'}';
      css+=selector+' .sec-bg{opacity:'+mop+' !important;background-size:'+zoom+'% auto !important}';
      css+=selector+' .sec-vbg,'+selector+' .sec-vbg-frame{opacity:'+mop+' !important}';
      css+=selector+' .spl-media{width:'+mw+'% !important;max-width:'+mw+'% !important;border-radius:'+radius+'px !important}';
      css+=selector+' .spl-media img,'+selector+' .spl-media video,'+selector+' .spl-media iframe{object-fit:'+(s.media_fit||'cover')+' !important}';
      css+=selector+' .sec2{color:'+fg+' !important}';
      if(s.preset==='media-split'||s.preset==='split')css+=selector+' .spl{min-width:0 !important;grid-template-columns:minmax(0,'+(100-mw)+'fr) minmax(0,'+mw+'fr) !important;gap:clamp(35px,6vw,90px) !important}';
      if(s.preset==='statement')css+=selector+' .stmt{width:100% !important;max-width:'+cmax+'px !important;margin-left:auto !important;margin-right:auto !important;box-sizing:border-box !important}';
      css+=selector+' .body{width:100% !important;max-width:100% !important;min-width:0 !important}';
      css+=selector+' .body p{width:100% !important;max-width:100% !important;box-sizing:border-box !important;white-space:normal !important;overflow-wrap:break-word !important;word-break:normal !important;text-align:'+ba+' !important;text-align-last:auto !important}';
      if(s.preset==='gallery')css+=selector+' .gal{max-width:'+cmax+'px !important}';
      if(s.gradient_dir)css+=selector+' .sec-ov.gms-v14-gradient{background:linear-gradient('+s.gradient_dir+','+red+','+red2+') !important}';
      blocks.push({id:String(s.id),css:css,overlayOp:overlayOp,overlayColor:cssColor(s.overlay_color,'#000'),gop:gop});
    });
    var style='<style id="gms-v14-art">'+blocks.map(function(b){return b.css}).join('')+'</style>';
    html=html.replace('</head>',style+'</head>');
    blocks.forEach(function(b){
      var re=new RegExp('<section([^>]*id="'+b.id.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&')+'"[^>]*)>');
      html=html.replace(re,function(m,attrs){
        var ov='<div class="sec-ov gms-v14-overlay" style="background:'+b.overlayColor+';opacity:'+b.overlayOp+'"></div>';
        if(b.gop>0) ov+='<div class="sec-ov gms-v14-gradient" style="background:linear-gradient(135deg,'+red+','+red2+');opacity:'+b.gop+'"></div>';
        return '<section'+attrs+'>'+ov;
      });
    });
    return html;
  };
})();
