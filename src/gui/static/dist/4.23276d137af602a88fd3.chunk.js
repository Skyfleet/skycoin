webpackJsonp([4],{"/YBz":function(e,a){e.exports={common:{"coin-id":"SKY","coin-hours":"Coin Hours",usd:"USD",loading:"Cargando...",new:"Nueva",load:"Cargar"},errors:{error:"Error","fetch-version":"No ha sido posible verificar la \xfaltima versi\xf3n desde Github","incorrect-password":"Contrase\xf1a incorrecta","error-decrypting":"Error al desencriptar la billetera","api-disabled":"API desabilitada","no-wallet":"La billetera no existe","no-outputs":"No hay salidas no gastadas","window-size":"La ventana es demasiado estrecha para el contenido"},title:{language:"Seleccionar Lenguaje",wallets:"Billeteras",send:"Enviar",history:"Historial","buy-coin":"Comprar Skycoins",network:"Red",blockchain:"Blockchain",outputs:"Salidas",transactions:"Transacciones","pending-txs":"Transacciones Pendientes",backup:"Respaldar Billetera",explorer:"Explorador de Skycoin",seed:"Semilla de la Billetera",qrcode:"C\xf3digo QR",reset:"Restablecer contrase\xf1a",exchange:"Intercambiar","select-address":"Seleccionar Direcci\xf3n","order-history":"Historial de \xf3rdenes"},header:{"syncing-blocks":"Sincronizando bloques",update1:"La actualizaci\xf3n",update2:"est\xe1 disponible.",synchronizing:"El nodo est\xe1 sincronizando. Los datos mostrados pueden estar desactualizados.","pending-txs1":"Hay una o m\xe1s","pending-txs2":"transacciones pendientes.","pending-txs3":"Los datos mostrados pueden estar desactualizados.",errors:{"no-connections":"Sin conexiones activas, \xa1el cliente no est\xe1 conectado a otros nodos!","no-backend1":"Sin acceso al servidor. Por favor, reinicie la aplicaci\xf3n y/o cont\xe1ctenos v\xeda","no-backend2":"Telegram.","no-backend3":"",csrf:"Vulnerabilidad de seguridad: CSRF no funciona. Por favor, salga de inmediato."}},password:{title:"Introduzca Su Contrase\xf1a",label:"Contrase\xf1a","confirm-label":"Confirmar contrase\xf1a",button:"Continuar","reset-link":"He olvidado mi contrase\xf1a"},buy:{"deposit-address":"Seleccione una direcci\xf3n para la cual generar un enlace de dep\xf3sito BTC:","select-address":"Seleccione una direcci\xf3n",generate:"Generar","deposit-location":"Localizaci\xf3n de Dep\xf3sito","deposit-location-desc":"Seleccione la billetera en la que desea que le depositemos sus Skycoins despu\xe9s de recibir los Bitcoins.","make-choice":"Realice una selecci\xf3n","wallets-desc":"Una nueva direcci\xf3n BTC es generada cada vez que se selecciona una nueva billetera y direcci\xf3n. Una \xfanica direcci\xf3n de Skycoin puede tener asignadas hasta 5 direcciones BTC.",send:"Enviar Bitcoins","send-desc":"Env\xede Bitcoins a la direcci\xf3n abajo indicada. Al recibirlos, le depositaremos los Skycoins en una nueva direcci\xf3n en la billetera seleccionada m\xe1s arriba, a la tasa de cambio actual de {{ rate }} SKY/BTC.","fraction-warning":"\xa1Env\xede s\xf3lo m\xfaltiplos de la tasa SKY/BTC! Los Skycoins son enviados en n\xfameros enteros, \xa1no se env\xedan fracciones de SKY!",receive:"Recibir SKY","receive-desc":"Despu\xe9s de recibir los Bitcoins, le enviaremos sus Skycoins. El tiempo de espera para recibir sus SKY puede ser de entre 20 minutos y una hora.","status-button":"Estatus:","check-status-button":"Revisar Estatus","new-order-button":"Nueva Orden"},wizard:{"wallet-desc":'Si no tiene una billetera, use la semilla generada autom\xe1ticamente para crear una nueva. Si ya tiene una billetera, seleccione "Cargar" e introduzca su semilla.',"encrypt-desc":"Incremente la seguridad de su billetera encript\xe1ndola. Al introducir una contrase\xf1a m\xe1s abajo, su billetera ser\xe1 encriptada. S\xf3lo quien tenga la contrase\xf1a podr\xe1 acceder a la billetera y retirar fondos.","hardware-wallet-link":"\xbfUtilizando una billetera de hardware?","finish-button":"Finalizar","back-button":"Volver",confirm:{title:"\xa1Resguarde su semilla!",desc:"Queremos asegurarnos de que ha anotado su semilla y la ha almacenado en un lugar seguro. \xa1Si olvida su semilla, NO podr\xe1 recuperar su billetera!",checkbox:"Est\xe1 segura, lo garantizo.",button:"Continuar"}},wallet:{"new-address":"Nueva Direcci\xf3n","new-addresses":"Nuevas Direcciones","show-empty":"Mostrar Vac\xedas","hide-empty":"Ocultar Vac\xedas",encrypt:"Encriptar Billetera",decrypt:"Desencriptar Billetera","decrypt-warning":"Advertencia: por razones de seguridad, no se recomienda mantener las carteras desencriptadas. Se aconseja precauci\xf3n.",delete:"Borrar Billetera",edit:"Editar Billetera",add:"Agregar Billetera",load:"Cargar Billetera","encryption-enabled":"Encriptado habilitado","encryption-disabled":"Encriptado deshabilitado","hw-security-warning":'Posible riesgo de seguridad. Acceda a las opciones de la billetera de hardware (presionando el bot\xf3n "Billetera de Hardware" debajo de la lista de billeteras) mientras el dispositivo est\xe1 conectado, para m\xe1s informaci\xf3n.',wallet:"Billetera","hardware-wallet":"Billetera de Hardware","delete-confirmation":'ADVERTENCIA: la billetera "{{ name }}" ser\xe1 removida de la lista. Para agregarla nuevamente, deber\xe1 volver a conectar el dispositivo y abrir las opciones de la billetera del hardware (presionando el bot\xf3n "Billetera de hardware" debajo de la lista de las billeteras). \xbfDesea continuar?',"delete-confirmation-check":"S\xed, quiero borrar la billetera.","max-hardware-wallets-error":"Ya ha alcanzado el n\xfamero m\xe1ximo de direcciones que se puede agregar a la billetera de hardware.","add-many-confirmation":"ADVERTENCIA: si agrega demasiadas direcciones sin usar las anteriores o si usa las \xfaltimas y no las primeras, es posible que algunas direcciones no se recuperen autom\xe1ticamente si intenta restaurar la billetera con la semilla (tendr\xe1 que agregarlas manualmente). \xbfDesea continuar?",new:{"create-title":"Crear Billetera","load-title":"Cargar Billetera","encrypt-title":"Encriptar la billetera","name-label":"Nombre","seed-label":"Semilla","confirm-seed-label":"Confirmar semilla","seed-warning":"\xa1Recuerde esta semilla! Mant\xe9ngala en un lugar seguro. \xa1Si olvida su semilla, no podr\xe1 recuperar la billetera!","create-button":"Crear","load-button":"Cargar","cancel-button":"Cancelar","12-words":"12 palabras","24-words":"24 palabras","generate-12-seed":"Generar una semilla de 12 palabras","generate-24-seed":"Generar una semilla de 24 palabras",encrypt:"Encriptar billetera","encrypt-warning":"Le sugerimos que encripte con una contrase\xf1a cada una de sus billeteras. Si olvida su contrase\xf1a, puede restaurarla con la semilla. Aseg\xfarese de guardar su semilla en un lugar seguro antes de encriptar la billetera.","unconventional-seed-title":"Posible error","unconventional-seed-text":"Usted introdujo una semilla no convencional. Si lo hizo por alguna raz\xf3n en especial, puede continuar (s\xf3lo recomendable para usuarios avanzados). Sin embargo, si su intenci\xf3n es utilizar una semilla normal del sistema, usted debe borrar los textos y/o caracteres especiales adicionales.","unconventional-seed-check":"Continuar con la semilla no convencional."},rename:{title:"Renombrar Billetera","name-label":"Nombre","cancel-button":"Cancelar","rename-button":"Renombrar"},"add-addresses":{title:"Seleccionar cantidad","name-quantity":"Cantidad de direcciones a crear","cancel-button":"Cancelar","create-button":"Crear"},address:{show:"Presione para mostrar",copy:"Copiar","copy-address":"Copiar Direcci\xf3n",copied:"\xa1Copiado!",confirm:"Confirmar Direcci\xf3n",outputs:"Salidas No Gastadas",history:"Historial"}},send:{"synchronizing-warning":"La billetera todav\xeda est\xe1 sincronizando los datos, por lo que el saldo que se muestra puede ser incorrecto. \xbfSeguro de que desea continuar?","from-label":"Enviar desde","to-label":"Enviar a","amount-label":"Cantidad","notes-label":"Notas","wallet-label":"Billetera","addresses-label":"Direcci\xf3n","invalid-amount":"Por favor introduzca una cantidad v\xe1lida","addresses-help":"Limite las direcciones desde donde se podr\xedan enviar las monedas y las horas","all-addresses":"Todas las direcciones de la billetera seleccionada","outputs-label":"Salidas no gastadas","outputs-help":"Limite las salidas no gastadas desde donde se podr\xedan enviar las monedas y las horas. Solo se muestran las salidas de las direcciones seleccionadas.","all-outputs":"Todas las salidas no gastadas de las direcciones seleccionadas","available-msg-part1":"Con su selecci\xf3n actual puede enviar hasta","available-msg-part2":"y","available-msg-part3":"(al menos","available-msg-part4":"deben ser utilizadas para la tarifa de transacci\xf3n).","change-address-label":"Direcci\xf3n de retorno personalizada","change-address-select":"Seleccionar","change-address-help":'Direcci\xf3n para recibir el cambio. Si no se proporciona, ser\xe1 elegida autom\xe1ticamente. Haga clic en el enlace "Seleccionar" para elegir una direcci\xf3n de una de sus billeteras',"destinations-label":"Destinos","destinations-help1":"Direcciones de destino y sus monedas","destinations-help2":"Direcciones de destino, sus monedas y coin hours","hours-allocation-label":"Distribuci\xf3n autom\xe1tica de coin hours","options-label":"Opciones","value-label":"Factor de distribuci\xf3n de las coin hours","value-help":"Mientras mayor sea el valor, m\xe1s coin hours se enviar\xe1n a las salidas","preview-button":"Preview","send-button":"Enviar","back-button":"Volver",simple:"Simple",advanced:"Advanzado","select-wallet":"Seleccionar Billetera"},reset:{"wallet-label":"Billetera","seed-label":"Semilla de la billetera","password-label":"Nueva contrase\xf1a (deje en blanco si desea que la billetera no est\xe9 encriptada)","confirm-label":"Confirme la contrase\xf1a","reset-button":"Restaurar"},tx:{transaction:"Transacci\xf3n","confirm-transaction":"Confirmar Transacci\xf3n",from:"Desde",to:"A",date:"Fecha",status:"Estatus",coins:"Monedas",hours:"Horas",id:"Tx ID","show-more":"Mostrar m\xe1s","hours-moved":"movida(s)","hours-sent":"enviada(s)","hours-received":"recibida(s)","hours-burned":"quemada(s)",inputs:"Entradas",outputs:"Salidas",confirmed:"Confirmada",pending:"Pendiente","current-rate":"Calculado a la tasa actual"},backup:{"wallet-directory":"Directorio de la Billetera:","seed-warning":"RESPALDE SU SEMILLA. EN PAPEL. EN UN LUGAR SEGURO. Mientras tenga su semilla, podr\xe1 recuperar las monedas.",desc:"Use la tabla de m\xe1s abajo para obtener las semillas de sus billeteras encriptadas. <br>Para obtener las semillas de las billeteras no encriptadas, abra el directorio de m\xe1s arriba, abra los archivos .wlt en un editor de texto y recupere las semillas.","close-button":"Cerrar",wallet:"Nombre de la Billetera",filename:"Archivo",seed:"Semilla","show-seed":"Mostrar semilla","no-wallets":"No hay billeteras encriptadas"},blockchain:{blocks:"Cantidad de bloques",time:"Fecha del \xfaltimo bloque",hash:"Hash del \xfaltimo bloque","current-supply":"Suministro de SKY actual","total-supply":"Suministro de SKY total","current-coinhour-supply":"Suministro de Coin Hours actual","total-coinhour-supply":"Suministro de Coin Hours total"},network:{peer:"Par",source:"Fuente","block-height":"Altura del bloque","block-height-short":"Bloque","last-seen":"\xdaltima vez visto","last-received":"\xdaltima recepci\xf3n","last-sent":"\xdaltimo env\xedo",in:"Entrante",out:"Saliente",sources:{default:"Par por defecto",exchange:"Intercambio de pares"}},"pending-txs":{timestamp:"Fecha",txid:"ID de la transacci\xf3n",none:"Actualmente no hay transacciones pendientes",my:"M\xedas",all:"Todas"},history:{"tx-detail":"Detalles de la Transacci\xf3n",moving:"Moviendo internamente",moved:"Movida internamente",sending:"Enviando",sent:"Enviada",received:"Recibida",receiving:"Recibiendo",pending:"Pendiente","no-txs":"Usted no tiene historial de transacciones","no-txs-filter":"No hay transacciones que coincidan con los criterios de filtro actuales","no-filter":"Sin filtros activos (Presione para seleccionar billeteras/direcciones)",filter:"Filtro activo: ",filters:"Filtros activo: ","all-addresses":"Todas las direcciones"},teller:{done:"Completado","waiting-confirm":"Esperando confirmaci\xf3n","waiting-deposit":"Esperando dep\xf3sito de Bitcoins","waiting-send":"Esperando para env\xedar Skycoins",unknown:"Desconocido"},confirmation:{"header-text":"Confirmaci\xf3n","confirm-button":"S\xed","cancel-button":"No",close:"Cerrar"},service:{api:{"server-error":"Error de servidor"},wallet:{"not-enough-hours":"\xa1No cuenta con suficientes Coin Hours para realizar la operaci\xf3n!"}},"hardware-wallet":{general:{"default-wallet-name":"Nueva billetera de hardware","error-disconnected":"No se puede realizar la operaci\xf3n. La billetera de hardware no est\xe1 conectada.","simple-error":"Error, no se puede realizar la operaci\xf3n.","generic-error":"No se puede realizar la operaci\xf3n. Aseg\xfarese de haber conectado una billetera de hardware v\xe1lida y de que no est\xe9 esperando por alguna confirmaci\xf3n o respuesta.","generic-error-internet":"No se puede realizar la operaci\xf3n. Aseg\xfarese de haber conectado una billetera de hardware v\xe1lida que no est\xe9 esperando por alguna confirmaci\xf3n o respuesta y de que su equipo cuente con conexi\xf3n a internet y al nodo.","error-incorrect-wallet":"No se puede realizar la operaci\xf3n. La billetera de hardware conectada es diferente a la esperada.","error-incorrect-pin":"No se puede realizar la operaci\xf3n. El PIN que ha introducido no es correcto.",confirm:"Por favor, confirme la operaci\xf3n en la billetera de hardware.","confirm-and-more":"Por favor, confirme la operaci\xf3n en la billetera de hardware y siga las instrucciones.",close:"Cerrar",cancel:"Cancelar",continue:"Continuar",completed:"La operaci\xf3n se realiz\xf3 con \xe9xito.",refused:"La operaci\xf3n fall\xf3 o fue cancelada."},errors:{"too-many-inputs":"La transacci\xf3n tiene demasiadas entradas y no se puede procesar. Por favor, p\xf3ngase en contacto con el soporte t\xe9cnico.","too-many-outputs":"La transacci\xf3n tiene demasiadas salidas y no se puede procesar. Por favor, p\xf3ngase en contacto con el soporte t\xe9cnico."},"security-warning":{title:"Advertencia de seguridad",text:'La \xfaltima vez que se conect\xf3 esta billetera de hardware, se encontraron una o m\xe1s advertencias de seguridad. Le recomendamos que abra las opciones de billetera de hardware (presionando el bot\xf3n "Billetera de hardware" debajo de la lista de billeteras) mientras el dispositivo est\xe1 conectado y resuelva los problemas de seguridad antes de continuar.',check:"Entiendo los riesgos y deseo continuar.",continue:"Continuar",cancel:"Cancelar"},options:{connecting:"Conectando...",disconnected:"Billetera de hardware no detectada. Por favor, conecte una billetera de hardware para usar esta opci\xf3n.","unconfigured-detected-title":"Billetera de hardware no configurada","unconfigured-detected":'Se ha detectado una billetera de hardware sin semilla. Seleccione "Configurar autom\xe1ticamente" si desea configurarla como una billetera nueva y comenzar a usarla inmediatamente, o seleccione "Restaurar una copia de seguridad" si desea configurarla con la copia de seguridad de una semilla creada anteriormente y as\xed poder acceder a sus fondos de nuevo.',"configured-detected":"Billetera de hardware detectada. El dispositivo se identifica en la lista de billeteras como:","security-warnings-title":"Advertencias de seguridad","security-warning-title":"Advertencia de seguridad","backup-warning":'Debe hacer una copia de seguridad de la semilla de la billetera de hardware o podr\xeda perder acceso a los fondos en caso de problemas. Para hacer esto, seleccione la opci\xf3n "Crear copia de seguridad".',"pin-warning":'La billetera de hardware conectada no tiene un PIN. El c\xf3digo PIN protege la billetera de hardware en caso de p\xe9rdida, robo y pirateo. Para crear un c\xf3digo PIN, seleccione la opci\xf3n "Crear c\xf3digo PIN".',options:"Opciones:","configure-automatically":"Configurar autom\xe1ticamente","restore-backup":"Restaurar una copia de seguridad","create-backup":"Crear copia de seguridad",wipe:"Borrar el dispositivo","confirm-seed":"Confirmar la semilla","create-pin":"Crear c\xf3digo PIN","change-pin":"Cambiar el c\xf3digo PIN","forgotten-pin1":"Si no puede acceder a la billetera porque ha olvidado el PIN, puede borrar la billetera del hardware y luego restaurarla con la semilla haciendo clic","forgotten-pin2":"aqu\xed."},"generate-seed":{text:"Antes de continuar, puede seleccionar el n\xfamero de palabras que desea que tenga la semilla. La semilla es una lista de palabras que se pueden usar para recuperar el acceso a las monedas en caso de problemas. Ambos valores son seguros, por lo que si no tiene una raz\xf3n especial para seleccionar uno u otro, puede dejar el valor predeterminado.",configuring:"Configurando..."},"restore-seed":{text:"Antes de continuar, por favor seleccione la cantidad de palabras de la semilla que desea recuperar.","check-text":"Puede usar esta opci\xf3n para ingresar una semilla y verificar si es igual a la de la billetera de hardware. Antes de comenzar, seleccione el n\xfamero de palabras de la semilla que desea verificar.",warning:"ADVERTENCIA: para evitar posibles problemas, use solo semillas creadas con una billetera de hardware de la misma marca/modelo.","error-wrong-word":"Error: la palabra introducida no coincide con la solicitada por la billetera de hardware.","error-invalid-seed":"Error: La semilla no es v\xe1lida. Por favor, aseg\xfarese de ingresar las palabras correctas en el orden correcto.","error-wrong-seed":"Error: la semilla es v\xe1lida pero no coincide con la del dispositivo."},added:{title:"Nueva Billetera de Hardware",configuring:"Nueva billetera de hardware detectada. Configurando...",done:"Hecho",added1:"La billetera de hardware conectada se ha agregado a la lista de billeteras con el siguiente nombre:",added2:"Ahora puede consultar el saldo y las direcciones de la billetera de hardware incluso cuando no est\xe1 conectada. Adem\xe1s, puede cambiar el nombre de la billetera o eliminarla de la lista de billeteras, si lo desea."},wipe:{warning:"ADVERTENCIA: Todos los datos en la billetera de hardware ser\xe1n eliminados. Si no tiene una copia de seguridad, no podr\xe1 volver a acceder a sus fondos.","confirm-delete":"Quitar tambi\xe9n de la lista de billeteras."},"create-backup":{warning:'ADVERTENCIA: Solo puede usar esta opci\xf3n para hacer una copia de seguridad de la semilla de su billetera de hardware una vez. Si decide continuar, tendr\xe1 que escribir un grupo de palabras (se recomienda hacerlo en papel y no en una computadora) que aparecer\xe1n en la pantalla de la billetera de hardware y almacenar la lista en un lugar seguro. Cualquier persona con acceso a la lista de palabras (la "semilla") podr\xe1 acceder a los fondos de la cartera, por lo que se recomienda extremar las precauciones.',instructions:"Escriba la lista de palabras que aparecen en la pantalla de la billetera de hardware. Aseg\xfarate de respetar el orden y escribir cada palabra correctamente."},"seed-word":{title:"Ingresar palabra",info1:"Introduzca la palabra indicada en el dispositivo",info2:"Se le pedir\xe1 que ingrese las palabras de su semilla de respaldo en orden aleatorio, m\xe1s algunas palabras adicionales.",word:"Palabra solicitada","error-invalid-word":"La palabra introducida no es v\xe1lida.","error-loading-words":"Cargando la lista de palabras. Por favor espere."},"change-pin":{"pin-mismatch":"No se puede realizar la operaci\xf3n. Los dos PIN que ha introducido no coinciden."},"enter-pin":{title:"Ingresar PIN","title-change-current":"Ingrese el PIN actual","title-change-new":"Ingrese el nuevo PIN","title-change-confirm":"Confirme el nuevo PIN",instructions:"El patr\xf3n de n\xfameros del PIN se muestra en la pantalla de la billetera de hardware.","instructions-tx":"Introduzca el PIN para confirmar y firmar la transacci\xf3n.","instructions-change":"Ingrese un PIN dif\xedcil de adivinar de entre 4 y 8 n\xfameros.",help:"\xbfNecesita ayuda?"},"pin-help":{title:"Ayuda",part1:"Cuando sea necesario ingresar el PIN para continuar, la pantalla de la billetera del hardware mostrar\xe1 una matriz de 9 casillas con n\xfameros en orden aleatorio (el orden cambia cada vez) y se le pedir\xe1 que ingrese el PIN en la billetera de software usando una matriz de 9 botones que simplemente muestran el s\xedmbolo #.",part2:'Para ingresar el PIN, mire la posici\xf3n de los n\xfameros del PIN en la matriz de n\xfameros en la pantalla de la billetera de hardware y presione los botones correspondientes en la billetera de software. Por ejemplo, si el PIN es "23", el n\xfamero 2 est\xe1 en la esquina superior izquierda y el n\xfamero 3 en el centro de la matriz de n\xfameros de billetera de hardware, presione los botones superior izquierdo y central, en ese orden, en la billetera de software.',part3:'Si lo desea, tambi\xe9n puede usar el teclado num\xe9rico para ingresar el PIN. Sin embargo, como en el ejemplo anterior, si el PIN es "23", no puede simplemente escribir "23" con el teclado num\xe9rico, sino que deber\xe1 presionar las teclas que est\xe1n en la posici\xf3n donde est\xe1n los n\xfameros 2 y 3 en la pantalla de la billetera de hardware.'},"create-tx":{title:"Crear transacci\xf3n"},"confirm-address":{title:"Confirmar direcci\xf3n",instructions:"Por favor confirme en la billetera de hardware si la direcci\xf3n es:","short-confirmation":"Direcci\xf3n confirmada.",confirmation:'Direcci\xf3n confirmada. Por seguridad, puede volver a mostrar la direcci\xf3n en la billetera de hardware usando la opci\xf3n "Confirmar direcci\xf3n", en el men\xfa que puede mostrar presionando el bot\xf3n a la derecha del balance de la direccion.'}},"time-from-now":{"few-seconds":"hace pocos segundos",minute:"hace un minuto",minutes:"hace {{time}} minutos",hour:"hace una hora",hours:"hace {{time}} horas",day:"hace un d\xeda",days:"hace {{time}} d\xedas"},exchange:{"you-send":"Usted env\xeda","you-get":"Usted recibe","to-address":"A la direcci\xf3n de {{coin}}",price:"Tasa de cambio","time-15":"Duraci\xf3n del intercambio","exchange-button":"Intercambiar","min-amount":"Monto minimo:","max-amount":"Monto maximo:","agree-1":"Acepto los","agree-2":"T\xe9rminos de Uso","agree-3":"y la ","agree-4":"Pol\xedtica de Privacidad","powered-by":"Manejado por","need-help":"\xbfNecesita ayuda?","support-portal":"Portal de soporte",history:"Historial de \xf3rdenes","history-details":"Detalles","order-not-found":"Orden no encontrada",status:"Estado",exchanging:"Intercambiando {{from}} por {{to}}",select:"Seleccionar",offline:"El servicio est\xe1 temporalmente offline",statuses:{"user-waiting":"Esperando el deposito. Por favor, env\xede {{amount}} {{from}} a la direcci\xf3n de intercambio","market-waiting-confirmations":"Esperando las confirmaciones de la transacci\xf3n","market-confirmed":"Transacci\xf3n aceptada","market-exchanged":"{{from}} intercambiado por {{to}}","market-withdraw-waiting":"Enviando {{to}} a su direcci\xf3n",complete:"\xa1Intercambio completado!",error:"Se produjo un error"},details:{"exchange-addr":"Direcci\xf3n de intercambio","exchange-addr-tag":"Tag que debe adjuntarse a la transacci\xf3n","tx-id":"ID de la transacci\xf3n","order-id":"ID de la orden","error-msg":"Mensaje de error"}}}}});