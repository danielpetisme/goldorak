(function () {
  'use strict';
// cat convertcsv.json| jq '[.[] | {id: .id, name: .name, description: .description, room: .venue, speakers: .speakers | split(", "), start: .event_start | strptime("%Y-%m-%d %H:%M:%S") | mktime, end: .event_end | strptime("%Y-%m-%d %H:%M:%S") | mktime}]'
  angular
    .module('app')
    .constant('SNOWCAMP_2017', [
      {
        "id": "0422b37f88b64759367a2465d882da00",
        "name": "De git a la blockchain",
        "description": "Vous utilisez git au quotidien et vous aimeriez bien comprendre comment fonctionne la blockchain ?<br /> Dans ce talk, on parlera de git, d'immutabilit&eacute;, de blockchain, de bitcoin et des liens entre tout &ccedil;a.<br />On essayera de construire une blockchain &agrave; partir de git, et on imaginera un workflow git qui s'inspire de la blockchain !",
        "room": "TBA",
        "speakers": [
          "Victor Sabatier"
        ],
        "start": "2017-02-09 15:00:00",
        "end": 1486655400
      },
      {
        "id": "08643593f5177cb06632c9f74c0f9be7",
        "name": "Scalability & resiliency: all you need is orchestration!",
        "description": "Scalability &amp; resiliency is more and more handled by devs techniques : applications scale horizontally, they're 'designed for failures', relying on microservice architectures... The time is long gone when each app was relying on its specifically designed infrastructure!<br /> <br /> But it doesn't mean it's no longer an ops concern: practices and tools just shifted to fit new needs. Here comes orchestration with tools like Kubernetes, Mesos, and more recently Docker.<br /> <br /> In this talk, you'll understand what orchestration challenge is all about, understand how devs should shape their apps, and how to setup an orchestration platform as an ops. And because we don't live in la la land, we'll also address some hard spots such as dealing with non-containerized assets.<br /> <br /> Most of all, you'll get a step by step live demo on how a containerized app runs on top of Kubernetes, Mesos and Docker solutions, explaining each approach.",
        "room": "TBA",
        "speakers": [
          "Laurent Grangeau"
        ],
        "start": "2017-02-10 11:45:00",
        "end": 1486730100
      },
      {
        "id": "09553a9123ca102c07d11d1cb612308a",
        "name": "Lunch",
        "description": "",
        "room": "World Trade Center",
        "speakers": [],
        "start": "2017-02-08 12:30:00",
        "end": 1486562400
      },
      {
        "id": "0e8f877c0cca52939368a6e5c33e8fc9",
        "name": "Le Streaming d'API : pourquoi et comment transformer vos APIs statiques en donnees temps reel ?",
        "description": "Nous savons que l'animation est essentielle pour l'interaction avec nos utilisateurs. Mais aujourd'hui l'interactivit&eacute; ne peut plus se r&eacute;sumer &agrave; l&rsquo;UX. Twitter, Waze, Slack &hellip; toutes les applications &agrave; succ&egrave;s utilisent le temps r&eacute;el pour rendre leurs utilisateurs addicts.<br /> Mais comment faire pour transformer votre API statique en un flux de donn&eacute;es temps-r&eacute;el ? Du pull ? Du push ? Des WebHooks? <br /> Vous connaissez s&ucirc;rement les Web-Sockets, mais avez vous d&eacute;j&agrave; entendu parler de Server-Sent Events ?<br /> <br /> Dans ce talk nous comparerons ces diff&eacute;rentes technologies pour comprendre dans quel cas elles s'appliquent le mieux avant de voir comment on peut aller encore plus loin en r&eacute;duisant la quantit&eacute; de donn&eacute;es &eacute;chang&eacute;es.<br /> Et parce qu'il n'y a pas que le web qui a besoin de temps r&eacute;el (et parce que c'est bien plus fun), je vous montrerai comment faire danser des drones sur des APIs stream&eacute;es.",
        "room": "TBA",
        "speakers": [
          "Audrey Neveu"
        ],
        "start": "2017-02-09 11:45:00",
        "end": 1486643700
      },
      {
        "id": "0f60154295b8b61cc9af893a3ef194f9",
        "name": "SnoopEE 2.0 - Microservices made Easy!",
        "description": "Wouldn't it be nice to have a lean, non-intrusive, open source ecosystem based on standard technologies?<br /> <br /> The wait is over!<br /> <br /> SnoopEE 2.0 provides all the services you need to be able to focus solely on your business functionality. The boiler plate code for all the common patterns for distributed systems, such as discovery service, configuration management, ciruit breaker, load balancing etc. are handled by SnoopEE 2.0. And all by relying on standard technologies without relying on a long list of 3rd party frameworks. Creating microservices has never been easier.<br /> <br /> The discovery mechanism of SnoopEE has been around for a while, and with SnoopEE 2.0 a complete ecosystem for microservices is provided as an alternative to other comparable frameworks such as Spring Cloud. SnoopEE 2.0 is Microprofile 1.0 compliant.<br /> <br /> The slides for this session will be backed up by a demo to show key concepts and tools.",
        "room": "TBA",
        "speakers": [
          "Ivar Grimstad"
        ],
        "start": "2017-02-10 16:00:00",
        "end": 1486745400
      },
      {
        "id": "1006893b2ceeaeee367f0d198ce89455",
        "name": "Mon application React/Redux en production en 3h avec firebase",
        "description": "Je commence React/Redux et je ne sais pas trop comment d&eacute;marrer.<br /> Quelles sont les biblioth&egrave;ques &agrave; utiliser ?<br /> Quelles sont les conventions que je vais mettre en place ?<br /> Et surtout pourquoi ?<br /> <br /> Dans cette **universit&eacute;** de trois heures nous allons, ensemble, transformer une application primitive en une application pr&ecirc;te &agrave; &ecirc;tre d&eacute;ploy&eacute;e (avec firebase).<br /> <br /> Une premi&egrave;re application servira de base et sera utilis&eacute;e comme piq&ucirc;re de rappel sur React/Redux.<br /> Puis nous parcourrons les diff&eacute;rentes biblioth&egrave;ques classiques d'une telle stack en refactorisant l&rsquo;application &agrave; chaque brique ajout&eacute;e.<br /> <br /> Nous parlerons, entre autres, des **actions asynchrone**, des **optimisations de container** et du **router**.<br /> Nous reviendrons sur la configuration webpack pour faire du Sass scop&eacute; et autoprefix&eacute;.<br /> <br /> Finalement avec tout &ccedil;a, j'esp&egrave;re que nous aurons le temps de parler des Higher Order Components !<br /> <br /> ---<br /> <br /> Les pr&eacute;-requis sont disponibles ici : https://github.com/fabienjuif/react-redux-codelab",
        "room": "WTC Kilimandjaro 1",
        "speakers": [
          "Fabien JUIF"
        ],
        "start": "2017-02-08 09:30:00",
        "end": 1486557000
      },
      {
        "id": "178edd9a32c672273ce4e4eb2d95efd7",
        "name": "Les infrastructures immuables et la configuration declarative ont supprime la douleur de la gestion des serveurs !",
        "description": "Avant, j'utilisais beaucoup Debian pour h&eacute;berger les sites de mon entreprise. Puis j'ai d&eacute;couvert [NixOS](https://nixos.org/). C'est une distribution Linux construite sur les principes de l'infrastructure immuable : il y a une s&eacute;paration claire entre les donn&eacute;es variables et le reste, reste qui est g&eacute;r&eacute; de mani&egrave;re d&eacute;clarative et reproductible.<br /> <br /> J'expliquerai ce qu'est NixOS, comment &ccedil;a marche et pourquoi c'est un *game changer* pour moi (et peut &ecirc;tre pour vous) !",
        "room": "TBA",
        "speakers": [
          "David Sferruzza"
        ],
        "start": "2017-02-10 16:00:00",
        "end": 1486745400
      },
      {
        "id": "1abb4ffe53097ab613a0c862a928265e",
        "name": "Lunch",
        "description": "",
        "room": "Public Space",
        "speakers": [],
        "start": "2017-02-09 12:35:00",
        "end": 1486648800
      },
      {
        "id": "1c42c274bedf66f4ce153df337711970",
        "name": "Une usine logicielle pour vos web agencies : notre solution avec Openshift",
        "description": "Il s&rsquo;agit d&rsquo;un retour d'exp&eacute;rience sur la mise en place d&rsquo;Openshift au sein d&rsquo;un groupe d&rsquo;assurances (Le client n&rsquo;a pas encore donn&eacute; son accord pour &ecirc;tre nomm&eacute;).<br /> Le but est de pr&eacute;senter le projet, son objectif, sa mise en oeuvre, les difficult&eacute;s que nous avons rencontr&eacute;es, les gains que nous en avons obtenu et ce que nous en avons retenu .<br /> <br /> <br /> Le plan (susceptible d'&eacute;voluer):<br /> - Le projet original (5 min)<br /> - L'architecture technique (20 min)<br /> - Openshift (master/nodes/etcd)<br /> - Le portail (api/rest)<br /> - Les templates <br /> - Les difficult&eacute;s (15 minutes)<br /> - Les PV<br /> - Les images<br /> - La documentation<br /> - Les gains (15 minutes)<br /> - Tra&ccedil;abilit&eacute;<br /> - S&eacute;curit&eacute;<br /> - R&eacute;activit&eacute;<br /> - Conclusion &amp; Questions / R&eacute;ponses (5 min)",
        "room": "TBA",
        "speakers": [
          "Charles Sabourdin"
        ],
        "start": "2017-02-10 15:00:00",
        "end": 1486741800
      },
      {
        "id": "1f3858e27157bf4bf28a4f7eafd32504",
        "name": "[Keynote] Comment OpenStack integre 90000 commits par an",
        "description": "OpenStack est un des projets Open Source les plus actifs, avec plus de<br />2500 developpeurs, plus de 300 organisations, 90000 commits par an,<br />14000 changements propos&eacute;s par mois et 23000 tests lanc&eacute;s par jour.<br />Comment est organis&eacute; le d&eacute;veloppement ? Comment r&eacute;duit-t'on le risque de<br />regression dans une pile logicielle si complexe ? Quels outils sont-ils<br />utilis&eacute;s dans l'infrastructure du projet ? Quels challenges ont-ils &eacute;t&eacute;<br />rencontr&eacute;s et comment ont-ils &eacute;t&eacute; surmont&eacute;s ?<br /><br />Dans cette pr&eacute;sentation, Thierry Carrez, Directeur de l'Ing&eacute;nierie &agrave; la<br />Fondation OpenStack, va d&eacute;tailler les principes, m&eacute;thodologies et outils<br />utilis&eacute;s dans le projet OpenStack. Apr&egrave;s une br&egrave;ve pr&eacute;sentation du<br />projet et de sa gouvernance, nous plongerons dans le d&eacute;tails de<br />l'infrastructure du projet (enti&egrave;rement open source, int&eacute;gr&eacute;e en continu<br />et utilisant les ressources de multiples cloud publics OpenStack). Nous<br />reviendrons sur les challenges pass&eacute;s, et nous aborderons les challenges<br />&agrave; venir. La pr&eacute;sentation sera suivie d'une session de questions-r&eacute;ponses<br />durant laquelle Thierry r&eacute;pondra &agrave; toutes les questions que vous<br />pourriez avoir sur cette pr&eacute;sentation ou sur OpenStack en g&eacute;n&eacute;ral.",
        "room": "Espace Vie Etudiante (EVE)",
        "speakers": [
          "Thierry Carrez"
        ],
        "start": "2017-02-10 09:00:00",
        "end": 1486720800
      },
      {
        "id": "23d2a861e327eb849247f17b55ce5d16",
        "name": "Authentication using One-Time-Password Token and Smart Card",
        "description": "Authentication is one of the major components of security. Despite the<br /> importance of this area of security, many people are still using<br /> password-based authentication for access to many services. This talk<br /> will describe and demo how you can use free and open-source software like FreeIPA<br /> and SSSD to provide strong two-factor authentication methods such as<br /> one-time passwords (OTP) and smart cards with X.509 certificates.<br /> <br /> About the authors: We are software developers and support engineers, all working on FreeIPA and LDAP. FreeIPA is a free and open-source software infrastructure project providing Active Directory-like services to Linux and other POSIX-compatible operating systems.",
        "room": "TBA",
        "speakers": [
          "thierry bordaz"
        ],
        "start": "2017-02-09 10:45:00",
        "end": 1486640100
      },
      {
        "id": "2408f62d515772b66e9226202cab9afe",
        "name": "La reconnaissance d'image par reseau de neurones",
        "description": "De l'identification des visages dans les r&eacute;seaux sociaux, &agrave; la d&eacute;tection des signalisations dans les voitures autonomes, Les r&eacute;seaux neurones &agrave; convolution (CNN) ont r&eacute;volutionn&eacute; la reconnaissance d&rsquo;image, mais comment fonctionnent-ils ? comment peut-on les impl&eacute;ment&eacute;s ? c&rsquo;est ce qu&rsquo;on d&eacute;taillera dans cette session.<br /> <br /> Le talk commencera par une courte introduction aux RN, suivie par un focus sur les CNN, ses use cases, les diff&eacute;rentes couches qui composent ce type de r&eacute;seau. Ensuite on pr&eacute;sentera des diff&eacute;rents r&eacute;seaux optimis&eacute;s pour la classification, la d&eacute;tection et la segmentation des images. et on fera le tour des framework utilis&eacute;s pour construire ces r&eacute;seaux. et on finira par un exemple de classification impl&eacute;ment&eacute; en Tensorflow et Deeplearning4j.",
        "room": "TBA",
        "speakers": [
          "Walid chergui"
        ],
        "start": "2017-02-09 14:00:00",
        "end": 1486651800
      },
      {
        "id": "298da4f27929676565313c5acc251d14",
        "name": "Welcome breakfast",
        "description": "",
        "room": "Espace Vie Etudiante (EVE)",
        "speakers": [],
        "start": "2017-02-09 08:00:00",
        "end": 1486630800
      },
      {
        "id": "2e110d84478819c83ef6fe3018c59469",
        "name": "Les reseaux LPWAN pour connecter tous vos objets, des aujourd'hui",
        "description": "D&eacute;couvrons les technologies LoRaWan et Sigfox avec leur points communs et leur sp&eacute;cificit&eacute;s pour bien comprendre ce en quoi elles sont toutes deux les cl&eacute;s de la r&eacute;volution en marche des objets connect&eacute;s.",
        "room": "TBA",
        "speakers": [
          "Paul Pinault"
        ],
        "start": "2017-02-10 10:45:00",
        "end": 1486726500
      },
      {
        "id": "306a0121b5dc653987d19d08b50163d2",
        "name": "Apache Spark : Hands-on et use cases pour developpeurs Java",
        "description": "Spark est un framework open source de calcul distribu&eacute;, utilis&eacute; pour faire de l'analyse de donn&eacute;e sur de grands volumes. Mais devons-nous &ecirc;tre 'data scientist' et passionn&eacute; de Scala pour l'utiliser ?<br />Non seulement l'analyse de donn&eacute;e avec Spark est &agrave; port&eacute;e de tout d&eacute;veloppeur Java, mais elle permet d'avoir un impact direct sur le business. Depuis la version 2.0 de Spark, l'API des DataFrames permet de profiter des optimisations du moteur d'ex&eacute;cution peu importe le langage utilis&eacute;, dont Java. <br />Nous allons utiliser Spark sur diff&eacute;rentes sources de donn&eacute;es (fichiers plats, MySQL, Cassandra) et dans des cas d'usages concrets bas&eacute;s sur les donn&eacute;es de LesFurets.com (avec &eacute;criture de tests unitaires), en passant en revue les principales fonctionnalit&eacute;s du moteur, soit Spark Core, Spark SQL, Spark Streaming et Spark MLlib (Machine Learning Library), dans une pr&eacute;sentation alternant slides et d&eacute;monstrations live.",
        "room": "TBA",
        "speakers": [
          "Alexandre Dubreuil"
        ],
        "start": "2017-02-09 10:45:00",
        "end": 1486640100
      },
      {
        "id": "3a603ce7f48df740da54d97b0d52f09c",
        "name": "Distributed tracing for dummies",
        "description": "D&eacute;couvrons comment mettre en place 'from scratch' une solution de tra&ccedil;age de requ&ecirc;te dans un environnement distribu&eacute; avec une quantit&eacute; de code minimal!<br /> Au programme Spring Cloud Sleuth, ElasticSearch, Zipkin ... le tout en live coding !",
        "room": "TBA",
        "speakers": [
          "Florian Garcia"
        ],
        "start": "2017-02-09 14:00:00",
        "end": 1486651800
      },
      {
        "id": "3dd57a1b68703f2af76a9ea93401182c",
        "name": "Ingest node : (re)indexer et enrichir des documents dans Elasticsearch",
        "description": "Lorsque vous injectez des donn&eacute;es dans elasticsearch, vous pouvez avoir besoin de r&eacute;aliser des op&eacute;rations de transformation assez simples. Jusqu'&agrave; pr&eacute;sent, ces op&eacute;rations devaient s'effectuer en dehors d'elasticsearch, avant l'indexation proprement dite.<br /> <br /> Souhaitez la bienvenue &agrave; Ingest node ! Un nouveau type de noeud qui vous permet justement de faire cela.<br /> <br /> Ce talk explique le concept de Ingest Node, comment l'int&eacute;grer avec le reste de la suite logicielle Elastic et comment d&eacute;velopper son propre plugin Ingest par la pratique en montrant comment j'ai d&eacute;velopp&eacute; le plugin 'ingest-bano' pour enrichir des adresses postales et/ou des coordonn&eacute;es g&eacute;ographiques fran&ccedil;aises (pour l'instant).<br /> <br /> Ce talk parlera &eacute;galement de l'API de r&eacute;indexation qui peut &eacute;galement b&eacute;n&eacute;ficier du pipeline d'ingestion pour modifier vos donn&eacute;es &agrave; la vol&eacute;e lors de la r&eacute;indexation.",
        "room": "TBA",
        "speakers": [
          "Sylvain Wallez"
        ],
        "start": "2017-02-10 11:45:00",
        "end": 1486730100
      },
      {
        "id": "40af8047dcc3f91e59139e0edd67a0e3",
        "name": "RabbitMQ 101 : job scheduling, microservices communication, event-based data stream... How to cook the rabbit?",
        "description": "Lots of people need job scheduling, microservices communication, asynchronous message passing&hellip; There is a stable and reliable solution: AMQP. Event if it seems to be complicated at first, it can solve lots of problems. RabbitMQ is a stable and battle tested product, has great performance, and provides simple access from C, java, python, ruby, node.js, scala, go&hellip; This talk is about rabbitMQ, how to start using it, how to work with it, fundamental and various pattern to use it in real world cases.",
        "room": "TBA",
        "speakers": [
          "Quentin ADAM"
        ],
        "start": "2017-02-09 15:00:00",
        "end": 1486655400
      },
      {
        "id": "4ac9d6b5b30813c67667ee4de3c2df12",
        "name": "TypeScript 2.0, emergence des transpileurs et futur de JavaScript",
        "description": "JavaScript est le langage le plus utilis&eacute; dans le monde. <br /> Aujourd'hui l'av&egrave;nement de ES6 puis ES7, la mont&eacute;e en puissance de node.js cot&eacute; backend et l'apparition de transpillers comme TypeScript vont encore augmenter le potentiel du d&eacute;v web. <br /> Les transpillers comme TypeScript permettent d&egrave;s aujourd'hui de b&eacute;n&eacute;ficier de nouvelles features et de nouveaux outils pour &ecirc;tre encore plus productif. <br /> Durant cette session, nous verrons ce que peut apporter TypeScript pour aborder l'avenir de JavaScript : D&eacute;corateurs, Metadata ou encore Non nullables Types. <br /> Enfin, nous aborderons ce que pourrait devenir JavaScript demain en abordant aussi la venue de WebAssembly, SIMD ou encore asm.js <br /> Session d&eacute;finitivement d&eacute;di&eacute;e aux d&eacute;veloppeurs Web Front End, et autre passionn&eacute;s de technos !",
        "room": "TBA",
        "speakers": [
          "Sebastien Pertus"
        ],
        "start": "2017-02-09 16:00:00",
        "end": 1486659000
      },
      {
        "id": "4de365b8df93e8be8d784d46e211ee1e",
        "name": "La revanche du in-memory: la pate thermique entre vos applis et vos donnees - un exemple avec Infinispan",
        "description": "De nos jours, les applis g&eacute;n&egrave;rent de la donn&eacute;e, beaucoup de donn&eacute;es.<br /> Les applis et les microservices en g&eacute;n&eacute;ral consomment une partie tr&egrave;s sp&eacute;cifique de mon g&acirc;teau de donn&eacute;es et jamais sous la m&ecirc;me forme.<br /> Sans compter que la donn&eacute;es doit &ecirc;tre tortur&eacute;e pour l&rsquo;analyser jusqu'&agrave; la derni&egrave;re goutte. <br /> Et par dessus le march&eacute; &ccedil;a serait bien si c&rsquo;&eacute;tait rapide tout &ccedil;a !<br /> <br /> Les syst&egrave;mes in-memory comme Infinispan peuvent vous y aider.<br /> Venez discuter des architectures et des situations o&ugrave; un syst&egrave;me in-memory est int&eacute;ressant.<br /> Nous allons en particulier plonger dans le spectre possible des capacit&eacute;s de requ&ecirc;tage: en partant des requ&ecirc;tes classiques, full-text ou spatiales (Lucene), en passant par Map/Reduce, les requ&ecirc;tes dites en continu (ou r&eacute;active), l&rsquo;ex&eacute;cution de code distribu&eacute; et m&ecirc;me Hadoop et Spark.",
        "room": "TBA",
        "speakers": [
          "Emmanuel Bernard"
        ],
        "start": "2017-02-10 10:45:00",
        "end": 1486726500
      },
      {
        "id": "53a3708890c0ddff5c361cd4c328641b",
        "name": "Quelle plateforme IoT pour mon decapsuleur connecte ?",
        "description": "Bon, la pompe &agrave; bi&egrave;re et le d&eacute;capsuleur connect&eacute;s, on a d&eacute;j&agrave;. <br /> Maintenant, on a besoin d'interconnecter les objets, de g&eacute;rer plusieurs protocoles, de traiter les donn&eacute;es et &eacute;v&eacute;nements au fil de l'eau, de s&eacute;curit&eacute; (important pour la bi&egrave;re), ...<br /> Testons diff&eacute;rentes plateformes IoT pour savoir laquelle est actuellement la plus pertinente pour g&eacute;rer tout &ccedil;a ?",
        "room": "TBA",
        "speakers": [
          "Gwennael BUCHET",
          "Adrien Legrand"
        ],
        "start": "2017-02-10 11:45:00",
        "end": 1486730100
      },
      {
        "id": "56c70570aca9438e399183761f27b611",
        "name": "GnuPG, Keybase, le web of trust : a quoi ca sert ?",
        "description": "On r&eacute;sume souvent la s&eacute;curit&eacute; des &eacute;changes sur Internet &agrave; SSL/TLS/HTTPS, mais en creusant on peut tomber sur des outils comme GnuPG et des notions de 'web of trust'. Leur int&eacute;r&ecirc;t peut para&icirc;tre limit&eacute;, et la complexit&eacute; de leur mise en &oelig;uvre les limite sans doute aux purs et durs de la s&eacute;curit&eacute;... Dans cette pr&eacute;sentation, vous d&eacute;couvrirez quelques usages r&eacute;els du web of trust, l'int&eacute;r&ecirc;t (ou non) de GnuPG et des tentatives de simplification telles que Keybase.",
        "room": "TBA",
        "speakers": [
          "Stephen Kitt"
        ],
        "start": "2017-02-09 11:45:00",
        "end": 1486643700
      },
      {
        "id": "609f5c08f9f53cc3e7b7668664f291e1",
        "name": "Conquerir le monde avec CoreOs",
        "description": "Sur le fond d'un star wars camp, nous vous proposons de r&eacute;aliser le plus grand cluster de CoreOs jamais cr&eacute;&eacute; ! Un peu d'Ansible par ci et un peu de Fleet par la, et nous voici avec une arm&eacute;e de Docker &agrave; disposition !<br /> <br /> Et si les Ewok prenaient le pouvoir et installaient Kubernetes pour remplacer Fleet sur ce CoreOs que se passerait il ?<br /> <br /> Rejoignez cette exp&eacute;rience XXL.",
        "room": "WTC Mont-Blanc 4",
        "speakers": [
          "Yan Matagne",
          "Antoine Stalin"
        ],
        "start": "2017-02-08 09:30:00",
        "end": 1486557000
      },
      {
        "id": "6c779ae882a2a06f4418dfafcfa35873",
        "name": "Welcome",
        "description": "",
        "room": "World Trade Center",
        "speakers": [],
        "start": "2017-02-08 09:00:00",
        "end": 1486546200
      },
      {
        "id": "70a50a0655530d234d2c42d7620ac8a8",
        "name": "[Keynote] Open Source Challenges in the Enterprise",
        "description": "Open  source has gone from being the domain of academic researchers to the  forefront of enterprise development and deployment. All of the most  significant industrial waves of the past two decades have had open  source at their heart, whether it's Linux for the operating system,  Android for mobile or JBoss and Tomcat for application servers. In this  talk we'll discuss why open source has been adopted within enterprises  for mission critical environments and what reliability and dependability  challenges it has faced as a result. We'll also look at the impact open  source is having on things such as Internet of Things.",
        "room": "Espace Vie Etudiante (EVE)",
        "speakers": [
          "Mark Little"
        ],
        "start": "2017-02-09 09:00:00",
        "end": 1486634400
      },
      {
        "id": "73200c4ed5b5bd6ab4456501faa39e17",
        "name": "Premiers pas en Deep Learning avec Keras",
        "description": "**Keras** est une librairie d&eacute;di&eacute;e au **deep learning** dont les objectifs principaux sont l'exp&eacute;rimentation rapide et la facilit&eacute; d'utilisation.<br /> <br /> D&eacute;mocratis&eacute; ces derni&egrave;res ann&eacute;es avec l'augmentation des capacit&eacute;s de stockage et de calcul, popularis&eacute; par les g&eacute;ants du WEB, le deep learning peut apporter des solutions dans des domaines comme la classification d'images, la reconnaissance vocale, l'analyse de texte, la g&eacute;n&eacute;tique, les chatbots ou m&ecirc;me la cr&eacute;ation artistique.<br /> <br /> Apr&egrave;s avoir tent&eacute; de d&eacute;finir un peu plus pr&eacute;cis&eacute;ment ce qu'est le deep learning et parcouru l'API propos&eacute;e par Keras, nous verrons lors de cette session que quelques lignes de python peuvent suffire pour impl&eacute;menter des premiers mod&egrave;les de **traitement automatique de langage naturel** ou de **classification d'images**.",
        "room": "TBA",
        "speakers": [
          "Manuel Verriez"
        ],
        "start": "2017-02-09 16:00:00",
        "end": 1486659000
      },
      {
        "id": "74190f52fac395f905763df22bd9e5d6",
        "name": "Welcome breakfast",
        "description": "",
        "room": "Espace Vie Etudiante (EVE)",
        "speakers": [],
        "start": "2017-02-10 08:00:00",
        "end": 1486717200
      },
      {
        "id": "761bf3e58219a1f597de337887ec746a",
        "name": "Serverless : transition du monolithique au systeme distribue",
        "description": "C'est l'histoire d'une application web. De base monolithique, elle a &eacute;volu&eacute; pour int&eacute;grer de mani&egrave;re massive des technologies de type 'serverless' (pool de 2000 AWS Lambda en production) : am&eacute;lioration drastique des performances, meilleure exp&eacute;rience utilisateur. L'introduction de cette technologie a surtout transform&eacute; au plus profond l'architecture de l'application en un syst&egrave;me distribu&eacute;&hellip; et avec ma vision de tous mes futurs d&eacute;veloppements.",
        "room": "TBA",
        "speakers": [
          "Yves Brissaud"
        ],
        "start": "2017-02-10 14:00:00",
        "end": 1486738200
      },
      {
        "id": "7678c65bf08c1d745a569f2b1343bc4d",
        "name": "Oubliez les migraines, faites de l'asynchrone... synchrone !",
        "description": "Tout d&eacute;veloppeur JavaScript &ndash; m&ecirc;me celui qui n'ose pas se l'avouer &ndash; a subi un jour le callback hell &agrave; cause de l'asynchrone. Aujourd'hui, de nouveaux outils du langage nous permettent de g&eacute;rer bien plus &eacute;l&eacute;gamment nos appels asynchrones, &agrave; tel point qu'on en vient &agrave; faire de l'asynchrone... synchrone ! <br /> <br /> Je vous propose de d&eacute;couvrir cela au travers d'un live coding en partant de la code base cauchemardesque h&eacute;rit&eacute;e du stagiaire d&eacute;butant le JavaScript &ndash; si cela ne vous &eacute;voque rien, vous faites parti d'une minorit&eacute; miracul&eacute;e ! Nous utiliserons les promesses, les g&eacute;n&eacute;rateurs et les coroutines pour l'am&eacute;liorer progressivement, en notant au passage les pi&egrave;ges auxquels il ne faut pas succomber...",
        "room": "TBA",
        "speakers": [
          "Jordane Grenat"
        ],
        "start": "2017-02-10 11:45:00",
        "end": 1486730100
      },
      {
        "id": "8553cf102a39dc449586b9ad1438d9ac",
        "name": "Zap it !",
        "description": "Owasp Zed Attack Proxy: Zap, est un projet phare de l&rsquo;organisation OWASP. Ce scanner de vuln&eacute;rabilit&eacute; a &eacute;t&eacute; imagin&eacute; pour s&rsquo;adapter &agrave; votre contexte professionnel, que vous soyez auditeur, testeur fonctionnel ou d&eacute;veloppeur, Zap vous assistera &agrave; automatiser vos scans et r&eacute;pondra aux particularit&eacute;s de votre application.<br /> <br /> Lors de cette pr&eacute;sentation, nous allons balayer les usages basiques, puis nous allons nous essayer aux modules avanc&eacute;s et custom et de scripter sur le tas.",
        "room": "TBA",
        "speakers": [
          "Zakaria RACHID"
        ],
        "start": "2017-02-10 14:00:00",
        "end": 1486738200
      },
      {
        "id": "863a85bdfb9eccad66a298d161c07e9b",
        "name": "GraphQL vs Falcor",
        "description": "L&rsquo;h&eacute;g&eacute;monie de l&rsquo;architecture REST est &eacute;branl&eacute;e par de nouveaux venus : GraphQL de Facebook et Falcor de Netflix. Comment ces deux technologies peuvent-elles nous aider &agrave; d&eacute;velopper des applications web plus rapidement ?<br /> <br /> <br /> Nous commencerons par une rapide introduction de GraphQL et Falcor : le concept qui se cache derri&egrave;re, leurs objectifs, ainsi que leur place dans nos architectures client-serveur.<br /> <br /> <br /> Nous vous proposerons ensuite de d&eacute;velopper une application mobile de transport en commun avec REST, GraphQL et Falcor afin de comparer l&rsquo;impact de ces technologies sur les propri&eacute;t&eacute;s du code et les co&ucirc;ts de d&eacute;veloppement. Cette comparaison sera assist&eacute;e par un outil de traduction de requ&ecirc;tes, con&ccedil;u par nos soins.",
        "room": "TBA",
        "speakers": [
          "Antoine Cellier",
          "Hugo Wood"
        ],
        "start": "2017-02-09 14:00:00",
        "end": 1486651800
      },
      {
        "id": "8fb97816f2fea04c7f08f34716172965",
        "name": "Event Storming : comprendre le metier autrement",
        "description": "Il n&rsquo;est jamais simple de mod&eacute;liser efficacement un syst&egrave;me. Nous proposons pour y parvenir de supprimer tout vocabulaire technique et de se mettre d'accord sur un langage commun &agrave; l'&eacute;quipe et sp&eacute;cifique au projet.<br /> Laissez mijoter l'intelligence collective des acteurs d'un projet devant un immense tableau blanc, pour &eacute;changer et d&eacute;crire les &eacute;v&egrave;nements pouvant &ecirc;tre produit dans le syst&egrave;me. Le r&eacute;sultat est un mod&egrave;le, absorbant des commandes et g&eacute;n&eacute;rant des &eacute;v&egrave;nements pour communiquer ses d&eacute;cisions. Vous verrez ainsi avec quelle rapidit&eacute;, la compr&eacute;hension globale du m&eacute;tier augmente. <br /> Et si vous venez &agrave; l'atelier CQRS et Event Sourcing, vous verrez comment impl&eacute;menter cette mod&eacute;lisation le plus simplement possible !",
        "room": "WTC Mont-Blanc 2",
        "speakers": [
          "Emilien Pecoul",
          "Florent Pellet"
        ],
        "start": "2017-02-08 14:00:00",
        "end": 1486573200
      },
      {
        "id": "a1befda45eb479f23e685a3bdce179e7",
        "name": "Mixite dans le monde des webcomponents",
        "description": "Ah, les web components, quelle belle id&eacute;e ! Un nouveau standard, du d&eacute;veloppement web bas&eacute; enfin sur une vraie architecture en composants, de la r&eacute;utilisation, de la modularisation, de l'encapsulation... Des choses que les d&eacute;veloppeurs backend ont depuis plus de trente ans enfin disponibles pour les d&eacute;veloppeurs web... Mais en attendant que le W3C d&eacute;cide de sortir le standard, ce qu'on a dans le mains c'est une promese d'un beau avenir et une panoplie de biblioth&egrave;ques cens&eacute;es combler le manque en attendant : Polymer, X-Tag, Bosoonic... Et r&eacute;cement, avec des React, Aurelia et d'autres Angular 2, il semble que tous les frameworks JS modernes s'orients vers les composants web. Dans ce talk on va essayer de r&eacute;pondre &agrave; une des questions qu'on nous pose le plus souvent quand nous parlons de web components : 'OK, le futur sera beau, mais aujourd'hui, si je fais des componsants avec une biblioth&egrave;que X et mon pote en fait avec une biblioth&egrave;que Y, je peux les utiliser dans la m&ecirc;me application ? Et ils marcheront dans mon framework favori ?' Et pour r&eacute;pondre a cette question, nous allons emprunter quelques techniques au monde de la musique avec un battle entre Cyril Balit et Horacio Gonzalez afin d'int&eacute;grer et faire parler des composants web dans un maximum de technologies. Car face &agrave; la tendance &agrave; se polariser avec des querelles de chapelles type Angula vs React vs Aurelia vs Polymer vs Meteor nous pr&eacute;f&eacute;rons le slogan *Let's work hand in hand and move the web forward*",
        "room": "TBA",
        "speakers": [
          "Horacio Gonzalez",
          "Cyril Balit"
        ],
        "start": "2017-02-10 14:00:00",
        "end": 1486738200
      },
      {
        "id": "a1c888fcd20090b4c76f79cc4d43ff75",
        "name": "Turn your Java EE Monoliths into Microservices with WildFly Swarm",
        "description": "In this talk we will be introduced to WildFly Swarm, a sister project to WildFly, once known as the JBoss Application Server.<br /> <br /> WildFly has evolved into the Swiss Army knife of application servers providing a robust, modular, lightweight, fully manageable and fast runtime, optimized for the cloud, implementing the complete set of Java EE7 APIs.<br /> <br /> WildFly Swarm on the other hand gives you the ability to create fat jars that bundle together your application and only the server parts you need as well as a whole set of additional services that go well beyond Java EE and help you integrate seamlessly with containerized orchestrated cloud based environments. <br /> <br /> Thus with WildFly &amp; WildFly Swarm you can gradually adopt DevOps practices and build upon your existing Java EE expertise to make the transition from Monoliths to Self Contained Systems and Microservices architectures, taking Enterprise Java to a whole new level.",
        "room": "TBA",
        "speakers": [
          "Dimitris Andreadis"
        ],
        "start": "2017-02-09 16:00:00",
        "end": 1486659000
      },
      {
        "id": "a7c1f4202ab1be9cc1bf16a6a6e2d0d9",
        "name": "Preparez-vous a la modularite selon Java 9",
        "description": "La principale nouveaut&eacute; de Java 9 viendra du cot&eacute; de la modularit&eacute;. Et qu'on le veuille ou non il faudra tenir compte de ce changement et s'y pr&eacute;parer.<br /> <br /> Dans la premi&egrave;re partie de cet atelier, nous expliquerons ce qui a motiv&eacute; cette &eacute;volution, puis nous verrons les principaux concepts sous-jacents. Vous serez alors pr&ecirc;ts &agrave; poser vos mains sur le clavier pour migrer une application vers java 9. <br /> <br /> Le premier objectif sera de la faire fonctionner avec un minimum d'effort en mode classpath. Vous verrez qu'il y a d&eacute;j&agrave; quelques &eacute;cueils. Ensuite vous y int&eacute;grerez de la modularit&eacute;, en d&eacute;finissant vos d&eacute;pendances et vos niveaux d'exports. Enfin, vous empaquetterez le r&eacute;sultat de votre travail avec jlink.",
        "room": "WTC Mont-Blanc 2",
        "speakers": [
          "Alexis Hassler",
          "Remy Forax"
        ],
        "start": "2017-02-08 09:30:00",
        "end": 1486557000
      },
      {
        "id": "abf262c7d1127d65deca2f044c8d61d6",
        "name": "Batissons ensemble un pipeline avec Jenkins et Docker",
        "description": "Le but de cet atelier sera de construire ensemble un pipeline de 'Livraison Continue' (Continuous Deployment) pour une application.<br /> <br /> Jenkins 2.0 (https://jenkins.io/2.0/) a introduit le concept de Pipeline en 1&egrave;re ligne, avec une configuration stock&eacute;e dans le code pour une automatisation parfaite.<br /> Docker est l'outil id&eacute;al pour faciliter les probl&eacute;matiques de type 'paquets, versions de logiciels, d&eacute;pendances'.<br /> <br /> Des pr&eacute;sentations sur ces outils existent par centaine. Mais les essayer 'grandeur nature' avec un speaker pour vous aider vous permettra de vous faire une id&eacute;e r&eacute;elle.<br /> Vous repartirez de cet atelier avec une vision claire des points forts et des points faible de ces outils, afin d'&ecirc;tre pr&ecirc;t &agrave; les utiliser dans les bonnes situations.<br /> <br /> De mani&egrave;re plus d&eacute;taill&eacute;es, nous traiterons:<br /> - Un petit tour du propri&eacute;taire de l'application 'd&eacute;mo' afin de la comprendre (0 pr&eacute;-r&eacute;quis)<br /> - Bien d&eacute;marrer avec Jenkins 2, quelques bonne pratiques de configuration<br /> - Prise en main de pipeline<br /> - Utilisation de Docker pour d&eacute;livrer l'application<br /> - Utilisation de Docker pour les tests<br /> - Utilisation de Docker pour Jenkins (inception) !",
        "room": "WTC Mont-Blanc 1",
        "speakers": [
          "Damien Duportal"
        ],
        "start": "2017-02-08 14:00:00",
        "end": 1486573200
      },
      {
        "id": "ae0b7c89d74a649d2c23145bc496948a",
        "name": "Having fun with Raspberry(s) and Apache projects",
        "description": "You can do a lot with a Raspberry and ASF projects.<br /> <br /> From a Tiny object connected to Internet to a application running in the cloud.<br /> <br /> First Raspberry as a Sensor collecting data and sending it to Casandra.<br /> <br /> Second Raspberry as a 'server' running HTTPD and mod_python.<br /> <br /> Third small cluster of Apache Tomcat with Raspberry PIs, How to use Docker to build a cluster with 2 PIs and use HTTPD mod_proxy to load balance the cluster nodes.<br /> <br /> Fourth move the cluster to the cloud...<br /> <br /> Next limit is anything you can imagine ;-)",
        "room": "TBA",
        "speakers": [
          "Jean-Frederic Clere"
        ],
        "start": "2017-02-09 11:45:00",
        "end": 1486643700
      },
      {
        "id": "afff51cf2f56cdbc8193f8839f4a1a66",
        "name": "Functional web applications with Kotlin and Spring",
        "description": "Cette pr&eacute;sentation a pour but de vous montrer un nouveau type d'application fonctionnelle utilisant<strong> Spring Reactive</strong> ainsi que le langage <strong>Kotlin</strong> qui convient tout aussi bien &agrave; la programmation orient&eacute;e objet qu'&agrave; la programmation fonctionnelle.<br /><br />Je me baserai sur un exemple concret, en l'occurence le projet du nouveau site de la conf&eacute;rence Mix-IT dont je m'occupe et dont les sources sont <a href='https://github.com/mix-it/mixit' target='_blank'>disponibles sur GitHub</a>.<br />Cette conf&eacute;rence sera <strong>un live coding</strong> d'une version simplifi&eacute;e de ce site qui pr&eacute;sentera:<br /><ul><li>Le support Kotlin int&eacute;gr&eacute; &agrave; Spring Framework 5 (en exclusivit&eacute; mondiale ^^)</li><li>Le nouveau framework Spring Web functional</li><li>L'API de r&eacute;cup&eacute;ration de bean bas&eacute;e sur les lambdas (plus de proxy CGLIB)</li><li>Des classes immutables et une injection par constructeur plut&ocirc;t que par setter</li><li>La puissance des extensions Kotlin pour un code propre</li><li>Un rendu des template client et server avec Mustache</li><li>Une application l&eacute;g&egrave;re et Reactive bas&eacute;e sur Reactor Netty</li><li>L'utilisation de MongoDB via une API Reactive</li><li>Un fichier de build Gradle &eacute;crit &eacute;galement en Kotlin</li></ul>",
        "room": "TBA",
        "speakers": [
          "Sebastien Deleuze"
        ],
        "start": "2017-02-10 15:00:00",
        "end": 1486741800
      },
      {
        "id": "b141d402882de62c61138a6219859175",
        "name": "Packages ? Tout compris !",
        "description": "Le 11 Octobre 2016, Facebook &ndash; qui n'utilisait d&eacute;j&agrave; plus NPM &ndash; a open-sourc&eacute; avec google son propre gestionnaire de paquets : 'yarn'. Comment accueillir la nouvelle ? Doit-on se r&eacute;jouir &ndash; pour sa rapidit&eacute; notamment &ndash; ou s'inqui&eacute;ter de la disparition potentielle de 'NPM '?<br /> <br /> <br /> Afin d&rsquo;avoir un raisonnement logique pour r&eacute;pondre &agrave; cette question, je vous invite &agrave; prendre du recul sur les gestionnaire de paquets. Quel est leur r&ocirc;le ? Comment doivent-ils s&rsquo;utiliser ? Comment &ecirc;tre certain d&rsquo;avoir les m&ecirc;me version de nos d&eacute;pendances en production et en d&eacute;veloppement ? Comment g&eacute;rer les d&eacute;pendances : en arbre, &agrave; plat ou m&ecirc;me les deux &agrave; la fois ? Comment sont stock&eacute;s ces paquets, peuvent-ils &ecirc;tre supprim&eacute;s ?<br /> <br /> <br /> Continuons notre exploration et nous nous apercevons tr&egrave;s vite que les gestionnaires de paquets sont principalement influenc&eacute;s par la mani&egrave;re dont les d&eacute;pendances sont import&eacute;es dans notre code. Le TC-39 est en train de r&eacute;fl&eacute;chir sur les sp&eacute;cifications du ES Module Loader ; mettons-nous &agrave; leur place et voyons quelles sont les diff&eacute;rentes options.",
        "room": "TBA",
        "speakers": [
          "Florent Berthelot"
        ],
        "start": "2017-02-09 15:00:00",
        "end": 1486655400
      },
      {
        "id": "b28b5da39844c1e98aaf14c427949613",
        "name": "Progressive Web Apps avec Polymer",
        "description": "Progressive Web Apps (PWA) combine the best of the web and the best of apps. They are useful to users from the very first visit in a browser tab, no install required. As the user progressively builds a relationship with the app over time, it becomes more and more powerful. It loads quickly, even on flaky networks, sends relevant push notifications, has an icon on the home screen, and loads as a top-level, full screen experience.<br /> <br /> And since last Google I/O, you can build PWAs with Polymer easily and without pain, using all the power and simplicity of web components.<br /> <br /> In this lab you will learn to build your first PWA using Polymer, how to make your PWA installable, how to manage the caching policies to give a nice offline UX to your users and you will even learn how to integrate in your PWA other new and upcoming web technologies like Physical Web.<br /> <br /> As we will mainly user available web components to build the app, a working knowledge of Polymer is not required to do the lab, we will introduce briefly the web-components concepts at the beginning of the session.",
        "room": "WTC Kilimandjaro 1",
        "speakers": [
          "Audrey Neveu",
          "Horacio Gonzalez"
        ],
        "start": "2017-02-08 14:00:00",
        "end": 1486573200
      },
      {
        "id": "b9c365bc2025b4e44a26b958a3b78048",
        "name": "Security Enforcement of the Java MicroService Applications",
        "description": "The security of the Java applications exposing RESTfull services is critical in many companies and business. The development<br /> of the Microservices cannot escape to this rule too.<br /> During this talk, we will present some techniques to secure the REST endpoint; using a Filter, the JAXRS <a href='https://github.com/Role' target='_blank'>@Role</a> annotation, the Security Constraint defined at the HTTP Server and challenge the pro and cons of the different approaches.<br /> Ultimately we will demonstrate how an API Management platform can  enforce the security of the REST endpoint while simplifying the  development &amp; its configuration.<br /> This  talk contains slides and demos",
        "room": "TBA",
        "speakers": [
          "Charles Moulliard"
        ],
        "start": "2017-02-09 14:00:00",
        "end": 1486651800
      },
      {
        "id": "bcadcc6df8d3b18770f88750907edf23",
        "name": "Developpez une application 'times series' avec Apache Spark, Hbase et l'API Kafka",
        "description": "De plus en plus d'applications capturent et analysent les donn&eacute;es temporelles en temps r&eacute;el; par exemple les applications qui traitent les donn&eacute;es provenant de vos objets connect&eacute;s.<br /> <br /> Ce Hands-On vous permettra de d&eacute;couvrir par la pratique les d&eacute;fis et architectures des application time series. Durant cet atelier vous d&eacute;velopperez une application utilisant des donn&eacute;es temporelles, en passant par les &eacute;tapes suivantes<br /> <br /> * D&eacute;couverte de Apache Spark et de son Shell<br /> * Capture du stream de donn&eacute;es avec l'API Kafka et int&eacute;gration avec Spark Streaming<br /> * Analyse et traitement les donn&eacute;es avec Spark (Core, SQL)<br /> * Cr&eacute;ation d'une application Spark en Java et/ou Scala<br /> * Int&eacute;gration Spark &amp; Hbase<br /> <br /> Cet atelier vous permettra donc de comprendre comment les backends d'applications que vous utilisez tous les jours sont d&eacute;velopp&eacute;s (analyse de log en temps reel, Web Profiling, IoT, Healthcare, T&eacute;l&eacute;m&eacute;trie,....)<br /> <br /> Cet atelier ne n&eacute;cessite pas d'experience avec Spark, Hbase ou Kafka, puisque vous d&eacute;couvrirez ces technologies durant les exercices.",
        "room": "WTC Mont-Blanc 4",
        "speakers": [
          "Jean Helou"
        ],
        "start": "2017-02-08 14:00:00",
        "end": 1486573200
      },
      {
        "id": "bdf91d0643fe5ad34283d28c8efd5373",
        "name": "Le mot de la fin / Last words...",
        "description": "",
        "room": "LIG Amphitheater",
        "speakers": [],
        "start": "2017-02-10 17:00:00",
        "end": 1486747800
      },
      {
        "id": "cbbab42260f386fc50bc7c633e9831f3",
        "name": "Bluetooth Low Energy: vous saurez tout",
        "description": "Avec l&rsquo;essor de l&rsquo;IoT, le Bluetototh Low Energy a fait son apparition en permettant &agrave; des objets de communiquer avec votre smartphone : thermom&egrave;tres, bracelets d&rsquo;activit&eacute;, mais aussi piloter votre cafeti&egrave;re pr&eacute;f&eacute;r&eacute;e. N&eacute;anmoins, ce protocole radio reste souvent myst&eacute;rieux pour les utilisateurs et les d&eacute;veloppeurs.<br /> <br /> Cette pr&eacute;sentation d&eacute;mystifiera son fonctionnement, son avenir avec l&rsquo;arriv&eacute;e du Bluetooth 5.0 et son impl&eacute;mentation sur les plateformes mobiles. Pour les plus bricoleurs de l'auditoire, nous verrons &eacute;galement comment cr&eacute;er rapidement son propre p&eacute;riph&eacute;rique BLE en utilisant un kit de d&eacute;veloppement grand public.",
        "room": "TBA",
        "speakers": [
          "Alexis DUQUE"
        ],
        "start": "2017-02-09 10:45:00",
        "end": 1486640100
      },
      {
        "id": "cc82acbdcc190e0390143be104d2bf6d",
        "name": "Creer et securiser ses microservices en 180 minutes avec WildFly Swarm, Keycloak et Forge",
        "description": "Dans cette universit&eacute;, nous verrons comment - 'from Scratch' - on peut cr&eacute;er des microservices &agrave; l'aide de WildFly Swarm et de Forge. Une fois cr&eacute;&eacute;s, nous les s&eacute;curiserons gr&acirc;ce &agrave; KeyCLoak, un serveur Open Source de gestion d'identit&eacute; et d'authentification. <br /> Cette universit&eacute; sera tr&egrave;s orient&eacute;e 'live coding' et le public est d'ailleurs fortement invit&eacute; &agrave; participer activement lors de cet atelier.",
        "room": "WTC Mont-Blanc 3",
        "speakers": [
          "Sebastien Blanc"
        ],
        "start": "2017-02-08 14:00:00",
        "end": 1486573200
      },
      {
        "id": "ce06d0a8735bc8722cc4be7c803b1967",
        "name": "Hey Hubot!? How are you doing?",
        "description": "## Description<br /> <br /> Hubot est, d'apr&egrave;s Wired, l'employ&eacute; le plus productif de Github... (et le moins cher), facile quand on est un bot. <br /> - Et si Hubot s'incarnait en quelque chose de plus physique? <br /> - Et si Hubot avait des oreilles?<br /> - Et si Hubot parlait?<br /> <br /> ... Et en plus Hubot il sait d&eacute;ployer vos projets ... <br /> <br /> - 'Hey Hubot, tu peux me lancer les tests?'<br /> - 'Yes Milord!'<br /> - 'Hey Hubot, qui le plus beau entre Daniel ou Philippe?'<br /> - 'Huston?'<br /> <br /> &Ccedil;a fait peur non? (Imaginez les bonnes blagues sur le plateau de d&eacute;veloppement - 'Hey Hubot, vas y, met en prod!' OMG!<br /> <br /> Le challenge de cette pr&eacute;sentation c'est de vous montrer comment faire du 'ChatOps' (par ex dans Slack, ou &eacute;quivalent) mais avec un bot 'physique' qui va nous '&eacute;couter'. Et nous nous aiderons pour cela de diff&eacute;rents SDK:<br /> <br /> - Hubot<br /> - Microsoft Cognitive Services<br /> - Alexa d'Amazon<br /> <br /> ## Details<br /> <br /> Durant ce talk nous utiliserons divers composants &eacute;lectroniques 'fa&ccedil;on IOT' (nano computer et/ou microcontroller, &eacute;cran, micro, ...) pour donner vie &agrave; Hubot et lui donner de quoi exprimer son humeur.<br /> <br /> ## Tags<br /> chatbot, reconnaissance vocale, analyse du lanagage, raspberry, IOT, productivit&eacute;<br /> <br /> ## Speakers<br /> <br /> [@k33g_org](https://github.com/k33g_org)<br /> <br /> [@danielpetisme](https://github.com/danielpetisme)",
        "room": "TBA",
        "speakers": [
          "Philippe Charriere",
          "Daniel Petisme"
        ],
        "start": "2017-02-10 10:45:00",
        "end": 1486726500
      },
      {
        "id": "d623c5a82f75c7ad9f42cf437387d303",
        "name": "Programmation reactive pour l'orchestration de services au sein de la JVM",
        "description": "Lorsque vous effectuez une recherche d'assurance sur LesFurets.com, nous interrogeons jusqu&rsquo;&agrave; 40 partenaires pour offrir un maximum d'offres &agrave; nos clients. Pour collecter ces offres, nous utilisons des patterns &agrave; base de locks, threads et files d'attentes en m&eacute;moire pour orchestrer des services au sein de la JVM. Bien que matures, ces constructions sont de tr&egrave;s bas niveau et sont sujettes &agrave; de nombreuses erreurs: il manque des abstractions pour aider &agrave; mettre en &oelig;uvre des politiques pour l'optimisation des ressources, la r&eacute;silience et la performance. La programmation r&eacute;active propose une approche diff&eacute;rente pour aborder ces probl&egrave;mes de concurrence en permettant aux d&eacute;veloppeurs de d&eacute;crire les op&eacute;rations sur les flux de donn&eacute;es. Dans cette pr&eacute;sentation, nous comparons diff&eacute;rents patterns pour appliquer une programmation r&eacute;active sur un composant critique de notre architecture, et donnons des exemples de diff&eacute;rentes API telles que RxJava2, Reactive Streams (Java 9 Flow) et CompletableFutures pour impl&eacute;menter une orchestration de services tout en garantissant la qualit&eacute; de services pour les utilisateurs.",
        "room": "TBA",
        "speakers": [
          "Ozan Gunalp"
        ],
        "start": "2017-02-10 15:00:00",
        "end": 1486741800
      },
      {
        "id": "d7cd2861d4dbc1d352c0e0c3cd063839",
        "name": "Fast Cars, Big Data - Ou comment le streaming peut aider la Formule 1!",
        "description": "Les voitures, et tout particuli&egrave;rement les voitures de courses, g&eacute;n&egrave;rent &eacute;norm&eacute;ment de donn&eacute;es. Durant cette pr&eacute;sentation, bas&eacute;e sur des d&eacute;monstrations, vous verrez comment :<br /> <br /> Capturer et traiter les donn&eacute;es en temps r&eacute;el avec l&rsquo;API Kafka et Spark<br /> Analyser ces donn&eacute;es avec Apache Spark et Drill<br /> Le but de cette pr&eacute;sentation, bas&eacute;e sur des d&eacute;monstrations est de montrer qu&rsquo;il est possible aujourd&rsquo;hui, sur une seule plateforme big data:<br /> <br /> * De capturer les donn&eacute;es en temps reel sous forme de flux avec Kafka<br /> * Les traiter avec Spark Streaming<br /> * Les stocker sous differentes formes en fonction des besoins fichiers (JSON, Parquet), mais aussi base nosql (HBase, MapRDB JSON, &hellip;)<br /> * Les analyser en mode batch par exemple pour faire de la maintenance predictive via du machine learning avec Spark ML, ou plus simplement des requetes SQL avec Apache Drill.<br /> <br /> Le projet est disponible en [open source](https://github.com/mapr-demos/racing-time-series) et s&rsquo;appuie sur:<br /> <br /> * Des Producers/Consumers Kafka<br /> * Spark et Spark Streaming pour le traitement de l&rsquo;information en temps reel et batch.<br /> * Une Web Application pour la visualisation en temps reel avec Kafka Consumer+Web Socket<br /> * Un simulateur de course pour la generation des donn&eacute;es [TORCS](http://torcs.sourceforge.net/) (The Open Source Racing Car Simulator)",
        "room": "TBA",
        "speakers": [
          "Tugdual Grall"
        ],
        "start": "2017-02-10 10:45:00",
        "end": 1486726500
      },
      {
        "id": "d7f1d637548369f50fa6f4621d61d37a",
        "name": "Continuous deployment, prenez le large avec Spinnaker!",
        "description": "Spinnaker est un outil open source de d&eacute;ploiement en continu multi-cloud principalement d&eacute;velopp&eacute; par et pour Netflix, Google, Microsoft et Pivotal. <br /> Vous savez d&eacute;j&agrave; construire vos applications avec Jenkins, venez d&eacute;couvrir comment automatiser tous vos d&eacute;ploiements.<br /> Nous verrons ensemble comment cr&eacute;er une plate forme compl&egrave;te de d&eacute;ploiement en continu jusqu'en production, &agrave; base de strat&eacute;gies canary ou blue/green avec la s&eacute;curit&eacute; du rollback en un clic.",
        "room": "TBA",
        "speakers": [
          "Stephane Lagraulet"
        ],
        "start": "2017-02-10 16:00:00",
        "end": 1486745400
      },
      {
        "id": "d97548009e3f7a8f82f3dd4611f8f022",
        "name": "Ceylon 1.3 dans tous ses etats",
        "description": "Depuis la sortie de Ceylon 1.3, Ceylon marche sur quasi tous les environements. Lors de cette conf&eacute;rence nous vous montrerons comment faire tourner Ceylon sur un maximum de plate-formes : Vert.x, WildFly, WildFly Swarm, Android, iPhone, Spring Boot, OSGi, fat-jar et JBoss Modules. Un max de d&eacute;mos, un minimum de bla-bla !",
        "room": "TBA",
        "speakers": [
          "Stephane Epardaud"
        ],
        "start": "2017-02-09 16:00:00",
        "end": 1486659000
      },
      {
        "id": "da4ff049dbd7cfbd4c88bae3acdd9e9b",
        "name": "Realite virtuelle et holographie",
        "description": "Venez d&eacute;couvrir les opportunit&eacute;s propos&eacute;es par HoloLens de Microsoft et d&eacute;couvrez les sc&eacute;narii les plus innovants et les plus propices pour le contexte de la r&eacute;alit&eacute; mixte.",
        "room": "TBA",
        "speakers": [
          "michel Rousseau"
        ],
        "start": "2017-02-10 14:00:00",
        "end": 1486738200
      },
      {
        "id": "dc7541d71005f18af4fc5865f45d2286",
        "name": "Comment gerer un projet de developpement avec GitHub de maniere asynchrone avec une equipe 'dispersee'",
        "description": "Lors de cette universit&eacute; nous allons voir comment mettre en oeuvre tous le cycle de vie de production d'un projet &agrave; travers les points suivants:<br /> <br /> - rappels de bases pour Git<br /> - initialiser un projet sur GitHub<br /> - comment mettre en oeuvre/int&eacute;grer un syst&egrave;me d'int&eacute;gration continue (utilisation des webhooks et des API GitHub)<br /> - notamment avec Jenkins<br /> - mais aussi en simulant un serveur de CI en quelques lignes de code JavaScript<br /> - comment utiliser GitHub Flow, les pull requests, les issues, project afin de mettre en place un mode de communication efficace avec votre &eacute;quipe (o&ugrave; qu'elle soit)<br /> - faire du chatops gr&acirc;ce &agrave; Hubot et un serveur de chat <br /> - comment faire son bot<br /> - et surtout &agrave; quoi peut-il r&eacute;ellement servir?<br /> <br /> L'objectif de cette universit&eacute; est de vous donner une vision globale d'un projet de d&eacute;veloppement, mais aussi de pouvoir appliquer des bonnes pratiques d&egrave;s le lendemain.<br /> <br /> Cette universit&eacute; s'adresse &agrave; tous les niveaux, il y aura du code, mais m&ecirc;me un profil non codeur peut y trouver de l'int&eacute;r&ecirc;t, tout particuli&egrave;rement sur les aspects communication.",
        "room": "WTC Mont-Blanc 1",
        "speakers": [
          "Philippe Charriere"
        ],
        "start": "2017-02-08 09:30:00",
        "end": 1486557000
      },
      {
        "id": "e2733cd6a6fa49d8a687669eeb4547d4",
        "name": "La grande famille OAuth 2.0",
        "description": "OAuth 2.0 est un standard d'autorisation moderne (comprendre avec du JSON partout) qui permet de controller l'acc&egrave;s aux resources web. Cette pr&eacute;sentation vous apprendra les pas de danse OAuth 2.0, et vous initiera &agrave; la chor&eacute;graphie OpenId Connect. On parlera aussi des nouveaut&eacute;s: UMA, PoP, Privacy, Consent et autres acronymes barbares.",
        "room": "TBA",
        "speakers": [
          "Guillaume Sauthier"
        ],
        "start": "2017-02-10 15:00:00",
        "end": 1486741800
      },
      {
        "id": "e9ca6536a3097c220824eb2460d30f60",
        "name": "Lunch",
        "description": "",
        "room": "Public Space",
        "speakers": [],
        "start": "2017-02-10 12:35:00",
        "end": 1486735200
      },
      {
        "id": "ee11c4cce44e373392032b58c3c3f9be",
        "name": "Unikernels: The next Big Little Thing ... ?",
        "description": "The last 20 years or so we&rsquo;ve seen applications evolve from large monolithic components to virtualized monoliths, to virtualized then containerized micro-services. But there&rsquo;s a new kid on the block. Unikernels (or &ldquo;Library Operating Systems&rdquo;) have existed since the 1990&rsquo;s.<br /> <br /> <br /> Unlike virtual machines or containers which run applications on a monolithic kernel, Unikernels link an application with only the kernel components required by the application. Reducing the kernel+application binary promises to create even lighter weight solutions as well as increased security as the attack surface is significantly reduced.<br /> <br /> <br /> These are still early days for Unikernels. Nevertheless, we see significant developments such as Docker Inc.s 2016 purchase of &ldquo;Unikernel Systems&rdquo;, Ericsson ran a Unikernel-based NFV PoC, EMC implemented a Unik runtime (Go-based Unikernels) for Kubernetes..<br /> <br /> <br /> This talk will look at what Unikernels are, what are the various implementations of Unikernels and their maturity, how to get started developing with them, or even deploying them. Are they a threat to containers (spoiler: No)?",
        "room": "TBA",
        "speakers": [
          "Mike BRIGHT"
        ],
        "start": "2017-02-10 16:00:00",
        "end": 1486745400
      },
      {
        "id": "f30be54bdb353d0874680c46666eecbc",
        "name": "Develop a Microservices architecture using WildFly Swarm",
        "description": "# Introduction<br /> <br /> - What is a Microservices Architecture<br /> - Why WildFly Swarm fits very well within this model<br /> - Review the use case to be designed 'A REST endpoint will expose a CD Music store Service that we will query from a REST client to fetch the CD or create a new CD. The store is designed as a SQL database (PostgreSQL). The endpoints will be documented using Swagger. A circuit breaker will be implemented to return a static list of CD if the service operating the datasore is down.<br /> - Technology used : JAX-RS, CDI, JSON-P, Swagger<br /> - Patterns : Service Discovery, Circuit Breaker<br /> - Setup the environment<br /> <br /> # Implementation<br /> <br /> - Design and develop the solution locally<br /> - Add test case <br /> - Build, package &amp; deploy the solution on Kubernetes/OpenShift<br /> <br /> # Review<br /> <br /> - Discuss and challenge the solution developed<br /> - Q/A<br /> - What do you think about the lab/technology used",
        "room": "WTC Mont-Blanc 3",
        "speakers": [
          "Charles Moulliard"
        ],
        "start": "2017-02-08 09:30:00",
        "end": 1486557000
      },
      {
        "id": "f4204ba34542c54a9c26b3f544d8240d",
        "name": "Developper dans le cloud avec Docker et Eclipse Che",
        "description": "Comment un environnement de d&eacute;veloppement Cloud et bas&eacute; sur Docker peut-il simplifier la vie des d&eacute;veloppeurs?<br /> <br /> Chez Codenvy, nous pensons que le d&eacute;veloppeur devrait se focaliser sur le code et non sur la configuration de l&rsquo;environnement de d&eacute;veloppement qui est l&rsquo;une des taches les plus fastidieuses du d&eacute;veloppeur. Pour cela, Eclipse Che b&eacute;n&eacute;ficie d&rsquo;un environnement d'ex&eacute;cution avec une configuration flexible bas&eacute;e sur Docker. <br /> <br /> Cette session permettra de d&eacute;couvrir Eclipse Che, les environnements de d&eacute;veloppement &agrave; la demande et les diff&eacute;rents choix d'utilisation.",
        "room": "TBA",
        "speakers": [
          "Florent BENOIT"
        ],
        "start": "2017-02-09 10:45:00",
        "end": 1486640100
      },
      {
        "id": "f6457c406489c215b007a447c708de51",
        "name": "Reactive and distributed applications with Vert.x",
        "description": "Sorry guys, there is no free lunch. We are in 2016, but distributed applications are not simple. You can embrace any cool trends such as microservices, developing a distributed application is a challenge. Why? Well, because it&rsquo;s complicated. Distributed systems have many many reasons to fail, technically it&rsquo;s complicated, and the theory behind distributed systems is also complicated.<br /> <br /> Vert.x is a toolkit for build reactive distributed applications on top of the Java Virtual Machine. The application can be developed in Java of course but also in JavaScript, Groovy, Ruby or Ceylon. Vert.x does not hide the complexity of distributed applications; it lets you handle it. Vert.x applications are able to manage failures, can use several protocols and interaction styles (messages, RPC, REST,&hellip;), handle heavy load, integrate with almost anything, and cope with most of the requirements of modern applications.<br /> <br /> In this session, an introduction to vert.x is given while highlighting all the complexity to build distributed applications. For each hotspot, vert.x features are demonstrated. This includes clustering, distributed data structures, message-based communication, HTTP and REST, load balancing, failure recovery, integration with other technologies&hellip;.",
        "room": "TBA",
        "speakers": [
          "Clement Escoffier"
        ],
        "start": "2017-02-10 10:45:00",
        "end": 1486726500
      },
      {
        "id": "f90ac962be5878a81938505d4f7d2fbd",
        "name": "Kit d'orchestration avec docker 1.13",
        "description": "Cr&eacute;er, d&eacute;marrer un conteneurs sur une machine est devenu un jeu<br /> d'enfant gr&acirc;ce &agrave; Docker. Mais il est encore relativement compliquer de<br /> monter un cluster de machine de fa&ccedil;on fiable et robuste sans &ecirc;tre un<br /> expert. Et s'il &eacute;tait possible de mettre en place un cluster Docker de<br /> fa&ccedil;on simple sans une arm&eacute;e d'expert ?<br /> <br /> C'est un sujet sur lequel les &eacute;quipes de Docker se sont pos&eacute;s et la<br /> nouvelle version 1.12 est la premi&egrave;re &eacute;tape !<br /> <br /> &Agrave; partir de le version 1.12, Docker embarque des fonctionnalit&eacute;s<br /> d'orchestration tr&egrave;s simple &agrave; mettre en place, robuste et s&eacute;curis&eacute;.<br /> <br /> Nous allons explorer les nouveaut&eacute;s apport&eacute;es par la version 1.12 (et<br /> superieurs) en mettant en place rapidement et simplement un cluster<br /> Docker, en quelques commandes.",
        "room": "TBA",
        "speakers": [
          "Vincent Demeester"
        ],
        "start": "2017-02-09 11:45:00",
        "end": 1486643700
      },
      {
        "id": "fddf8ab9a3003fdcead6fd58c3ca767b",
        "name": "LolCat on IoT",
        "description": "Tout le monde sait que les chats r&egrave;gnent en ma&icirc;tres sur Internet, mais comment domineront-ils l&rsquo;IoT ?<br /> <br /> En partant d&rsquo;un MVP &ldquo;trouver mon chat&rdquo;, nous transformerons un simple collier en objet connect&eacute;.<br /> A base d&rsquo;arduino, GPS et r&eacute;seau sans fil, nous &eacute;voluerons vers une solution de suivi temps r&eacute;el, un MAAS (Matou As A Service) ou un Cat Social Network.<br /> <br /> PS : Aucun animal ne sera maltrait&eacute; durant cette session.",
        "room": "TBA",
        "speakers": [
          "Erwann Thebault",
          "Jeremie Huchet",
          "Yoan Rousseau"
        ],
        "start": "2017-02-09 15:00:00",
        "end": 1486655400
      }
    ]
);
})();
