let productos = [
   
  {  stock:30, id: 'BotinesRigoreDiadora' ,categoria: 'Botines', name: "BOTINES RIGORE CAMPO DIADORA", precio: 17099, imagen:'/BotinesRigoreDiadora.png',desc:'Botín de aspecto armónico y moderno que reúne varias cualidades que influyen al momento de jugar. Cuenta con una capellada de una sola pieza, sin molestas costuras y todo los relieves en alta frecuencia están pensando para contribuir al momento de patear el balón, para que el mismo tome efecto, fuerza y la dirección deseada.' },
     
  { stock:30, id: 'CamisetaLiverpool' ,categoria: 'Camisetas', name: "CAMISETA LIVERPOOL FC NIKE", precio: 18999, imagen:'/CamisetaLiverpool.png',desc:'Al igual que otras camisetas de nuestra colección Stadium, esta combina detalles de diseño de réplica con tecnología absorbente de sudor para brindarte un look listo para el juego inspirado en el Liverpool Fútbol Club de Inglaterra. Este producto está hecho con fibras de poliéster 100% recicladas' },
    
  { stock:30, id: 'CamisetaRosarioCentral' ,categoria: 'Camisetas', name: "CAMISETA ROSARIO CENTRAL ", precio: 8990, imagen:'/CamisetaRosarioCentral.png',desc:'Camiseta para adultos Under Armour Away Authentic del Club Atlético Rosario Central.' },
    
  { stock:30, id: 'BotinesStamina' ,categoria: 'Botines', name: "BOTINES STAMINA CAMPO ATHIX", precio: 8899 , imagen:'/BotinesStamina.png',desc:'Botín realizado en una sola pieza con material sintético, sometido a un tratamiento especial con químicos que le dan una sueva textura y una amplia elasticidad. La suela es de tpu resistente a la erosión y la altura de los tapones es ideal para todo tipo de terreno. La suela, además de estar pegada, viene cosida para prolongar su durabilidad.' },
    
  { stock:30, id: 'BotinesStingray' ,categoria: 'Botines', name: "BOTINES STINGRAY II MACH 5 FG TOPPER", precio: 18999, imagen:'/BotinesStingray.png', desc:'Gran agarre, velocidad y potencia' },
    
  { stock:30, id: 'ShortEssentials' ,categoria: 'Shorts', name: "SHORT ESSENTIALS 3S ADIDAS", precio: 10999, imagen:'/ShortEssentials.png' , desc:'Sal con tus amigos con estilo. Las clásicas 3 Tiras le dan a estos shorts adidas un toque clásico que combina a la perfección con cualquier prenda de tu armario. La cintura elástica y suave aporta un plus de comodidad, mientras que el cordón ajustable te permite mantenerlos siempre en su lugar.'},
    
  { stock:30, id: 'ShortAfaArgentina' ,categoria: 'Shorts', name: "SHORT AFA ARGENTINA AWAY ADIDAS", precio: 8999, imagen:'/ShortAfaArgentina.png' , desc:'Ponete estos shorts de fútbol para jóvenes de Argentina con el resto del uniforme alternativo para conseguir el look perfecto para la cancha. Los tonos violeta representan la igualdad de género y la búsqueda de un mundo más justo. Su tejido ligero con tecnología de absorción AEROREADY se encarga de brindar comodidad dentro y fuera de la cancha.'},
    
  { stock:30, id: 'CamisetaAtleticoMadrid' ,categoria: 'Camisetas', name: "CAMISETA ATLETICO MADRID ", precio: 15899, imagen:'/CamisetaAtleticoMadrid.png',desc:'Al igual que otras camisetas de nuestra colección Stadium, la camiseta del Atlético de Madrid combina detalles de diseño de réplica con tela absorbente de sudor para brindarte un look listo para jugar inspirado en tu equipo favorito. Este producto está hecho con al menos un 75 % de fibras de poliéster recicladas.' },
    
  { stock:30, id: 'BotinesUltraMatch' ,categoria: 'Botines', name: "BOTINES ULTRA MATCH LL FG/AG PUMA", precio: 19499, imagen:'/BotinesUltraMatch.png', desc:'Muestra de lo que eres capaz con la potencia y el performance de nuestra colección Ultra. Nuestros zapatos de fútbol Ultra Match tienen un diseño impecable para darte una ventaja sobre la competencia. Están equipados con nuestro empeine mejorado único GRIP CONTROL, para que tengas un mayor control del balón, y con una suela SPEEDPLATE de TPU, que ofrece tracción, control y una propulsión increíbles. Además, tienen un ajuste óptimo con un borde de tejido de punto de corte bajo. Aptos para suelo firme o artificial.' },
    
  { stock:30, id: 'BotinesDominoDiadora' ,categoria: 'Botines', name: "BOTINES DOMINO CAMPO DIADORA", precio: 17099, imagen:'/BotinesDominoDiadora.png',desc:'Cuello y lengüeta tejido en textil poliéster con porcentajes de elastano, que tienen la particularidad de adaptarse y sujetarse al pie permitiendo mayor firmeza al golpear el balón. La suela, anatómicamente diseñada, posee una distribución adicional de tapones centrales que distribuyen y equilibran el peso y la estabilidad.' },
    
  { stock:30, id: 'GuantesArqueroRaptor3' ,categoria: 'Accesorios', name: "GUANTES ARQUERO RAPTOR GOALTY", precio: 8990, imagen:'/GuantesArqueroRaptor3.png', desc:'Guantes de arquero Goalty Raptor' },
    
  { stock:30, id: 'BotinesXSpeedportal' ,categoria: 'Botines', name: "BOTINES X SPEEDPORTAL 4 FXG ADIDAS", precio: 22999, imagen:'/BotinesXSpeedportal.png', desc:'Los buenos jugadores crean tiempo y espacio. Los grandes dejan todo atrás. Desatá tu velocidad multidimensional con adidas X Speedportal. Estos botines fueron creados para movimientos rápidos y velocidades que cambian partidos en terreno firme, terreno duro y césped artificial. Suave y resistente, su exterior textil revestido te ayuda a mantener el balón cerca cuando estás en acción.Hecho con una serie de materiales reciclados, este exterior incorpora al menos un 50 % de contenido reciclado. Este producto representa solo una de nuestras soluciones para ayudar a acabar con los residuos plásticos.' },
    
  { stock:30, id: 'BotinesXSpeedflow' ,categoria: 'Botines', name: "BOTINES X SPEEDFLOW.3 FG ADIDAS", precio: 25999, imagen:'/BotinesXSpeedflow.png', desc:'Cuando tus instintos afinados se unen a una velocidad abrumadora, la cancha se convierte en tu patio de recreo. Encontrá tu ritmo en el fútbol con los adidas X. Estos botines para niños te ofrecen velocidad con su exterior liviano de malla. En el interior, incorporan una estructura elástica tipo media que sujeta el pie. Debajo, la suela para terreno firme te asegura que siempre te adelantarás al resto.' },
    
  { stock:30, id: 'CamisetaFcBarcelona.png' ,categoria: 'Camisetas', name: "CAMISETA FC BAYERN MUNCHEN ADIDAS", precio: 16999, imagen:'/CamisetaBayernMunich.png',desc:'Rojo, blanco y apuntando a la victoria. Los colores clásicos del FC Bayern convergen en el frente de esta disruptiva camiseta de titular de adidas. Creada para mantener cómodos a los hinchas del club, combina paneles de malla con tecnología de absorción AEROREADY. Viene con un bordado del escudo del club y el lema "Mia san mia" para mostrar tu orgullo.' },
    
  { stock:30, id: 'CanillerasPureContact' ,categoria: 'Accesorios', name: "CANILLERAS PURE CONTACT REUSCH", precio: 3199, imagen:'/CanillerasPureContact.png', desc:'Canilleras para adultos Reusch Pure Contact' },
       
  { stock:30, id: 'CanillerasKingStrapPuma' ,categoria: 'Accesorios', name: "CANILLERAS KING STRAP PUMA", precio: 4999, imagen:'/CanillerasKingStrapPuma.png', desc:'Prepárate para una acción intensa en el campo con las canilleras King Strap Football. Con una silueta preformada anatómicamente hecha con una construcción de cubierta dura flexible, respaldo de espuma EVA para absorción de impactos y resistencia a los impactos, además de un sistema de doble correa ajustable para brindar un ajuste seguro, jugará con confianza y orgullo PUMA.' },
     
  { stock:30, id: 'CamisetaAtleticoMadrid' ,categoria: 'Camisetas', name: "CAMISETA FC BARCELONA NIKE", precio: 15899, imagen:'/CamisetaFcBarcelona.png',desc:'Al igual que otras camisetas de nuestra colección Stadium, la camiseta del F.C Barcelona combina detalles de diseño de réplica con tela absorbente de sudor para brindarte un look listo para el partido inspirado en tu equipo favorito. Este producto está confeccionado con fibras de poliéster 100 % recicladas.' },
     
  { stock:30, id: 'CamisetaNewells.' ,categoria: 'Camisetas', name: "CAMISETA NEWELLS OLD BOYS ", precio: 17999, imagen:'/CamisetaNewells.png', desc:'Pasaron 120 años y el legado sigue intacto. Con los colores que nos dan identidad desde que nacimos, les presentamos la nueva camiseta de Newells Old Boys 2023.Fieles a nuestros orígenes.' },
     
  { stock:30, id: 'BotinesStingrayMach' ,categoria: 'Botines', name: "BOTINES STINGRAY II MACH 1 FG TOPPER", precio: 14699, imagen:'/BotinesStingrayMach.png', desc:'Velocidad transónica dentro del campo de juego. Hechos para jugadores que buscan romper defensas a base de potencia y aceleración Capellada en cuero sintético liviano para un mayor confort y liviandad. Suela de goma, tipo Turf' },
     
  { stock:30, id: 'CamisetaArgentinosJuniors' ,categoria: 'Camisetas', name: "CAMISETA ARGENTINOS JUNIORS ", precio: 16599, imagen:'/CamisetaArgentinosJuniors.png', desc:'Camiseta Oficial 1 Umbro Asociación Atlética Argentinos Juniors.' },
     
  { stock:30, id: 'PelotaClubAlRihla' ,categoria: 'Pelotas', name: "PELOTA CLUB AL RIHLA ADIDAS", precio: 11999, imagen:'/PelotaClubAlRihla.png' , desc:'La pelota es solo el comienzo. El resto de tu historia futbolística aún no está escrito. Inspirada en el diseño de la pelota oficial de la Copa Mundial de la FIFA™, esta pelota Al Rihla Club está cosida a máquina para una mayor fiabilidad. Su cámara de butilo la mantiene inflada por más tiempo, sin importar si estás en el campo de entrenamiento o en el parque.'},
     
  { stock:30, id: 'PelotaAlRihlaLeague' ,categoria: 'Pelotas', name: "PELOTA AL RIHLA LEAGUE ADIDAS", precio: 23999, imagen:'/PelotaAlRihlaLeague.png', desc:'Al Rihla significa "El Viaje", la pelota es solo el comienzo. El resto de tu historia futbolística aún no está escrito. Con estampados inspirados en la pelota oficial de la Copa Mundial de la FIFA™, esta pelota adidas Al Rihla League es perfecta para partidos y sesiones de entrenamiento. Su estructura TSBE sin costuras te garantiza toques más precisos y la cámara de butilo se encarga de mantenerla inflada por más tiempo.' },
     
  { stock:30, id: 'PelotaClubAlRihlaN' ,categoria: 'Pelotas', name: "PELOTA CLUB AL RIHLA ADIDAS", precio: 11999, imagen:'/PelotaClubAlRihlaN.png' , desc:'La pelota es solo el comienzo. El resto de tu historia futbolística aún no está escrito. Inspirada en el diseño de la pelota oficial de la Copa Mundial de la FIFA™, esta pelota Al Rihla Club está cosida a máquina para una mayor fiabilidad. Su cámara de butilo la mantiene inflada por más tiempo, sin importar si estás en el campo de entrenamiento o en el parque.'},
     
  { stock:30, id: 'PelotaRihlaClub3' ,categoria: 'Pelotas', name: "PELOTA RIHLA CLUB ADIDAS", precio: 11999, imagen:'/PelotaRihlaClub3.png', desc:'Al Rihla significa "El Viaje", la pelota es solo el comienzo. El resto de tu historia futbolística aún no está escrito. Inspirada en el diseño de la pelota oficial de la Copa Mundial de la FIFA™, esta pelota Al Rihla Club está cosida a máquina para una mayor fiabilidad. Su cámara de butilo a mantiene inflada por más tiempo, sin importar si estás en el campo de entrenamiento o en el parque.' },
     
  { stock:30, id: 'BotinesPredatorAdidas' ,categoria: 'Botines', name: "BOTINES PREDATOR EDGE.3 FG ADIDAS",   precio: 30999, imagen:'/BotinesPredatorAdidas.png',desc:'Amague. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. Estos botines para niños te ayudan a dominar el balón con el exterior Control Zone que incorpora zonas estratégicas con un estampado que mejora el agarre. Su llamativa suela te mantiene en control en canchas de terreno firme.Hechos parcialmente con contenido reciclado generado a partir de desechos de producción, tales como, recortes de tela y los desechos domésticos postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen' },
     
  { stock:30, id: 'BotinesPuma' ,categoria: 'Botines', name: "BOTINES TACTO II FG/AG PUMA", precio: 13999, imagen:'/BotinesPuma.png',desc:'No importa qué posición ocupes dentro de la cancha, tus pases siempre serán perfectos con los Botines Puma Tacto II Fg/Ag son ideales para tus partidos más exigentes, porque garantizan liviandad gracias a su empeine suave y liviano. Se trata de un calzado simple y elegante. Su suela con tapones de goma mejora la tracción. Ponételos y convertite en una estrella del fútbol.' },
     
  { stock:30, id: 'PelotaAffa22Pro' ,categoria: 'Pelotas', name: "PELOTA AFA22 PRO ADIDAS", precio: 49999, imagen:'/PelotaAffa22Pro.png', desc:'De 1978 al futuro. Los llamativos gráficos difuminados de esta pelota adidas Argentum 22 se inspiran en la icónica pelota Tango Rosario que protagonizó la coronación de Argentina como campeón del mundo en suelo local. Usada en la liga más importante del país, esta pelota tiene una construcción termosellada sin costuras y cuenta con el sello FIFA Quality Pro, por lo que siempre estará a la altura de una gran ocasión.' },
     
  { stock:30, id: 'PelotaAlHilmFinalQatar' ,categoria: 'Pelotas', name: "PELOTA AL HILM FINAL QATAR 2022 ADIDAS", precio: 56999, imagen:'/PelotaAlHilmFinalQatar.png', desc:'Inspirada en los colores y la arquitectura compleja del país anfitrión. Esta llamativa pelota adidas Al Hilm es la pelota oficial usada en las semifinales y la final de la Copa Mundial de la FIFA™. Brillando con los colores dorados que comparten el estadio final y el famoso trofeo, esta pelota combina tecnología Speedshell en los paneles, textura de superficie y grabado de diamante hecho para el escenario más grande del fútbol    ' },
     
  { stock:30, id: 'ShortClubAdidas' ,categoria: 'Shorts', name: "SHORT CLUB ADIDAS", precio: 10999, imagen:'/ShortClubAdidas.png' , desc:'El clásico estilo del country club se actualiza. Luciendo las 3 Tiras horizontales en una pierna, estos shorts de tenis adidas Club están diseñados para ofrecer comodidad. El tejido suave y ventilado con tecnología de absorción AEROREADY mantiene la piel seca en los momentos más intensos en la cancha. El refuerzo de malla en la entrepierna favorece el flujo de aire y te permite alcanzar cada pelota con total confianza.'},
     
  { stock:30, id: 'ShortArgentinaAfa' ,categoria: 'Shorts', name: "SHORT ARGENTINA AFA KIDS ADIDAS", precio: 8999, imagen:'/ShortAfaArgentina.png' , desc:'Estos shorts adidas Argentina en blanco y negro para jóvenes lucen el mismo estilo futbolero clásico de la camiseta que acompañan. Su tejido suave con tecnología de absorción AEROREADY le brinda comodidad al hincha en todo momento. El escudo bordado de la selección le pone el toque final al look.'},
     
  { stock:30, id: 'GuantesArqueroRaptor' ,categoria: 'Accesorios', name: "GUANTES ARQUERO RAPTOR GOALTY", precio: 8990, imagen:'/GuantesArqueroRaptor.png', desc:'Guantes de arquero Goalty Raptor' },
     
  { stock:30, id: 'GuantesArqueroRaptor2' ,categoria: 'Accesorios', name: "GUANTES ARQUERO RAPTOR GOALTY", precio: 8990, imagen:'/GuantesArqueroRaptor2.png', desc:'Guantes de arquero Goalty Raptor' },
     
  { stock:30, id: 'BotinesUltraPlay' ,categoria: 'Botines', name: "BOTINES ULTRA PLAY FG/AG JR PUMA", precio: 15999, imagen:'/BotinesUltraPlay.png', desc:'Los Botines para niños Puma Ultra Play FG/AG, están diseñados para partidos en superficies naturales.' },
     
  { stock:30, id: 'BotinesUltra' ,categoria: 'Botines', name: "BOTINES ULTRA 4.4 FG/AG JR PUMA", precio: 16999, imagen:'/BotinesUltra.png', desc:'Velocidad supersónica dentro del campo de juego. Hechos para jugadores que buscan romper defensas a base de potencia y aceleración.' },
     
  { stock:30, id: 'BotinesSanCiroTopper' ,categoria: 'Botines', name: "BOTINES SAN CIRO V FG TOPPER",    precio: 13599, imagen:'/BotinesSanCiroTopper.png',desc:'Botines para partidos en superficies naturales Topper San Ciro V FG' },
     
  { stock:30, id: 'MediasTeamLigaPuma' ,categoria: 'Accesorios', name: "MEDIAS TEAM LIGA PUMA A ", precio: 2199, imagen:'/MediasTeamLigaPuma.png', desc:'Medias de futbol para adultos Puma Team Liga' },
     
  { stock:30, id: 'MediasTeamLigaPuma2' ,categoria: 'Accesorios', name: "MEDIAS TEAM LIGA PUMA N ", precio: 2199, imagen:'/MediasTeamLigaPuma2.png', desc:'Medias de futbol para caballeros Puma TEAM LIGA.' },
     
  { stock:30, id: 'MediasTeamLigaPuma3' ,categoria: 'Accesorios', name: "MEDIAS TEAM LIGA PUMA B ", precio: 2199, imagen:'/MediasTeamLigaPuma3.png', desc:'Medias de futbol para caballeros Puma TEAM LIGA.' },
     
  { stock:30, id: 'MediasUmbro' ,categoria: 'Accesorios', name: "MEDIAS FUTBOL UMBRO N", precio: 2249, imagen:'/MediasUmbro.png', desc:'Medias para Futbol Umbro'},
     
  { stock:30, id: 'CamisetaBocaJuniors' ,categoria: 'Camisetas', name: "CAMISETA BOCA JUNIORS AWAY ADIDAS", precio: 11699, imagen:'/CamisetaBocaJuniors.png', desc:'La nueva camiseta con vivos grises en formato de disruptivas líneas como aquella recordada camiseta suplente de 1992, tiene el cuello de color azul y amarillo y el escudo centrado a la altura del pecho. Las tres tiras de los hombros son azules y el conjunto se completa con un short gris y medias al tono.' },
     
  { stock:30, id: 'CamisetaRiverPlate' ,categoria: 'Camisetas', name: "CAMISETA RIVER PLATE ADIDAS", precio: 7890, imagen:'/CamisetaRiverPlate.png',desc:'River Plate es una institución del deporte. La banda roja en su uniforme local es uno de los detalles más emblemáticos en el mundo del fútbol. Esta camiseta adidas para jóvenes se inspira en uno de los uniformes más recordados de River y le agrega un toque moderno. Su tejido suave con tecnología de absorción AEROREADY te ofrece una gran comodidad mientras animás a tu equipo.' },
     
  { stock:30, id: 'MediasUmbro2' ,categoria: 'Accesorios', name: "MEDIAS FUTBOL UMBRO B", precio: 2249, imagen:'/MediasUmbro2.png', desc:'Medias de fútbol Umbro'},
     
  { stock:30, id: 'Inflador' ,categoria: 'Accesorios', name: "INFLADOR DOBLE ACCION 8M NASSAU", precio: 9699, imagen:'/Inflador.png', desc:'Inflador Nassau doble acción 8M' },
     
  { stock:30, id: 'BolsoAraonUmbro' ,categoria: 'Accesorios', name: "BOLSO ARAON UMBROS", precio: 7890, imagen:'/BolsoAraonUmbro.png', desc:'Bolso unisex Umbro Araon confeccionado en poliéster de alta durabilidad. Tira regulable. Bolsillo con cierre.' },
     
  { stock:30, id: 'BolsoPortland' ,categoria: 'Accesorios', name: "BOLSO PORTLAND KOSSOK", precio: 15299, imagen:'/BolsoPortland.png', desc:'Bolso deportivo Kossok con amplio compartimento principal con cierre de doble cursor y doble bolsillo interno. Amplio bolsillo interno de red con cierre. Organizador interno con dos bolsillos, uno de red con cierre y otro con cierre y tela afelpada por dentro para proteger objetos de valor. Porta llaves. Dos bolsillos laterales: uno con cierre de doble cursor que tiene una bolsa para calzado o ropa húmeda separándolo del contenido interno y otro de red. Asas de mano integradas con soporte acolchado, reforzado que adhiere con abrojo. Incluye correa regulable que puede ser desmontada. Costuras internas recubiertas. Tiracierres reforzados.' },
     
  { stock:30, id: 'MochilaPuma' ,categoria: 'Accesorios', name: "MOCHILA INDIVIDUALRISE PUMA", precio: 8999, imagen:'/MochilaPuma.png', desc:'Mochila Puma Indivisualrise diseñada para que lleves tus cosas con comodidad. Compartimento principal con cremallera bidireccional. Pequeño bolsillo frontal con cremallera. Pequeños bolsillo de malla en el lateral. Acolchado en las asas para mayor comodidad.' },
     
  { stock:30, id: 'PelotaArgentinaAlRihla' ,categoria: 'Pelotas', name: "PELOTA ARGENTINA AL RIHLA ADIDAS", precio: 11999, imagen:'/PelotaArgentinaAlRihla.png', desc:'¿Dónde terminará el viaje? Apoya a Argentina en el mayor torneo de fútbol del mundo. Este balón adidas club lleva el escudo oficial que los jugadores argentinos lucirán con orgullo en Qatar. Su construcción le da un tacto suave y una durabilidad duradera. La vejiga de butilo la mantiene inflada mientras emulas a tus héroes.' },
     
  { stock:30, id: 'PelotaArgentinaAfaOlpClb' ,categoria: 'Pelotas', name: "PELOTA ARGENTINA AFA OLP CLB ADIDAS", precio: 11999, imagen:'/PelotaArgentinaAfaOlpClb.png', desc:'Llevá tu pasión a las calles. Apoyá a Argentina en el torneo de fútbol más importante del mundo. Su diseño te ofrece un toque suave y una gran resistencia al desgaste.' },
     
  { stock:30, id: 'CanillerasXSpeedporta' ,categoria: 'Accesorios', name: "CANILLERAS X SPEEDPORTAL CLUB ADIDAS", precio: 5499, imagen:'/CanillerasXSpeedporta.png', desc:'La colección adidas X te da velocidad y tiempo de reacción, pero aún así necesitarás defenderte de aquellos que buscan detener tus carreras más veloces. Estas canilleras de fútbol están confeccionadas en plástico ligero pero resistente que permite el movimiento. El acolchado perforado mejora la transpirabilidad mientras que el diseño asimétrico se ajusta perfectamente a la parte inferior de las piernas.' },
     
  { stock:30, id: 'CanilleraKickTopper' ,categoria: 'Accesorios', name: "CANILLERA KICK TOPPER", precio: 3299, imagen:'/CanilleraKickTopper.png', desc:'Canillera con respaldo de EVA que ofrece amortiguación. Placa rigida plastica que ofrece protección. Iso aplicado en alto relieveTela: Polipropileno 95% 5% eva moldeada por inyección.' },
     
  { stock:30, id: 'CamisetaIndependiente' ,categoria: 'Camisetas', name: "CAMISETA INDEPENDIENTE ", precio: 15999, imagen:'/CamisetaIndependiente.png',desc:'Ponete la nueva Camiseta de Independiente de Avellaneda para niños, cerrá los ojos e imagínate que estás frente a una multitud enfervorecida en el estadio Libertadores de América.' },
     
  { stock:30, id: 'ShortClassicsLogoPuma' ,categoria: 'Shorts', name: "SHORT CLASSICS LOGO PUMA", precio: 10999, imagen:'/ShortClassicsLogoPuma.png' , desc:'Short de moda para hombres Puma CLASSICS LOGO.'},
     
  { stock:30, id: 'ShortThiago78' ,categoria: 'Shorts', name: "SHORT THIAGO KIDS 78", precio: 5499, imagen:'/ShortThiago78.png' , desc:'Short para niños 78 Thiago. Confeccionado en microfibra.'},
     
  { stock:30, id: 'ShortKids' ,categoria: 'Shorts', name: "SHORT KIDS 78", precio: 5499, imagen:'/ShortKids.png' , desc:'Short de Futbol para Niños 78 Thiago. Confeccionado en microfibra.'},
     
  { stock:30, id: 'NeccessaireDeportivo' ,categoria: 'Accesorios', name: "NECCESSAIRE DEPORTIVO REUSCH", precio: 6999, imagen:'/NeccessaireDeportivo.png' , desc:'El Neccesaire Reusch es un pequeño y compacto bolso, perfecto para llevar cosas pequeñas o bien, tus guantes Reusch.Está confeccionado en Doble Frontura, un material ligero que permite el paso del aire sin perder resistencia.'},
     
  { stock:30, id: 'CQKnWc50IZAjlcJaBbzn' ,categoria: 'Camisetas', name: "CAMISETA JUVENTUS HOME ADIDAS", precio: 14890, imagen:'/CamisetaJuventus.png',desc:'Un homenaje a su legado. Esta camiseta adidas Juventus celebra el décimo aniversario del icónico Allianz Stadium. Las estrellas que dominan el diseño de la edificación tambien adornan las famosas rayas negras para imprimirle un toque de estilo extra a un look clásico. El tejido suave y la tecnología de absorción de humedad AEROREADY trabajan en conjunto para mantener cómodos a los' },
     
  { stock:30, id: 'CamisetaBayernMunich' ,categoria: 'Camisetas', name: "CAMISETA AJAX 22/23 ADIDAS", precio: 16999, imagen:'/CamisetaAjax.png',desc:'Un uniforme clásico para un club de fútbol con clase. Manteniéndose fiel al rico legado del Ajax de Amsterdam, esta camiseta titular adidas conserva un look atemporal. Una segunda mirada revela detalles de finas rayas y hebras de oro que celebran una historia de éxito resplandeciente. Diseñada para jugadores e hinchas, esta camiseta brinda comodidad en todo momento gracias a sus paneles de malla y tecnología de absorción AEROREADY.' },
 
       
   ] 
   
  
    export const gFetch = (id) => {
        return new Promise(( res, rej )=>{    
            setTimeout(()=>{
                res( id ? productos.find(producto => producto.id === id) : productos)
            }, 1000) 
        })  
    } 

    export const gFetchOne = (id) => {
        return new Promise(( res, rej )=>{    
            setTimeout(()=>{
                res( productos.find(producto => producto.id === id) )
            }, 1000) 
        })  
    } 
    