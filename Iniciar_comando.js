const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 📌 Tabla de comandos y sus respuestas
const comandos = {
  ".pag": `
💳 **Pagina Web**

https://tengofe.co/products/coins 
  `,

  ".nodm": `
⚠️ **NO ENVIAR DINERO POR DM**
Rey, Recuerda Que ningún trabajador te puede contactar por dm! Si te contactan por DM bloquéalos inmediatamente y repórtalos en los tickets Evitemos estafas!
  `,
  ".transferencia": `
🏦 **Transferencia SPEI**
728969000105627895
Banco spin
Francisco Javier Ramírez Reynoso
solo transferencias
  `,

".oxxo": `
¡Hola! Te comparto mi código para que hagas un depósito a mi Cuenta Nu de Débito 🟣.

 5101 2585 4066 6206

 ¿Cómo funciona?
1. Ve a una tienda con la que Nu tenga convenio como OXXO, Soriana, Kiosko, Chedraui, Farmacias del Ahorro, Waldo's, o tiendas de conveniencia. 
2. Dale al cajero mi código y el monto del depósito.
3. Si no encuentran Nu en el sistema, puedes decir que quieres depositar con PESPay 
4. Recibiré una notificación cuando se complete el depósito.
  `,

  ".yape": `
🟧 **Pago en Yape**
PERU
997418486
Jefferson Gonzales E
  `,

  ".arg": `
🏦 **Argentina**
ARGENTINA
LucianokUtz.lemon2
  `,

  ".venta": `

⚠ Rey, recuerda que debes de escribir tu nombre de discord en tu ticket de pago, en caso de ser transferencia ponlo como concepto de pago!!! De otra forma se tomará como donación el pago!
  `,

  ".remitly": `

REMITLY 
012180015649991211
Banco: BBVA BANCOMER
Nombre: Sergio Rodrigo
Apellido: Caram 
Segundo apellido: Ramírez 
Ciudad: Veracruz 
‪‪+52 271 125 8998
  `,


    ".binance": `


BINANCE
BINANCE ID: 423710875
  `,

    ".entregas": `

⚠️ **ENTREGAS**

LA GERENTE SE CONTACTARÁ CONTIGO MAS TARDE, RECUERDA QUE DEBES SER PACIENTE YA QUE ES LA UNICA PERSONA QUE SE ENCARGA DE ENTREGAR A VARIAS PERSONAS, SUS NUMEROS SON; +52 1 33 1722 8458   /  +52 1 33 2953 5555.
RECUERDA, NADIE MAS DEBE CONTACTARTE, SOLO ESOS DOS NUMEROS, SI ALGUIEN TE CONTACTA BLOQUEALOS!
  `,




      ".entregar": `

⚠️ **ENTREGAR**

ENSEGUIDA RECIBIRÁS TU CUENTA, RECUERDA QUE DEBES SER PACIENTE YA QUE ES UNA LISTA DE ESPERA, EL TIEMPO ESTIMADO PARA LA ENTREGA DE CUENTAS ES DE 20 MINUTOS Y RECUERDA!! NADIE TE DEBE CONTACTAR, MUCHO MENOS PIDIENDO DINERO, SI TE CONTACTAN BLOQUEALO!
  `,



      ".clash": `
.clash
Podrias indicarnos cuantas cartas al 14, 15 y 16, si tienes emotes exclusivos puedes enviar fotos porfavor
  `,

      ".ff": `

Para evaluar tu cuenta de Free Fire ocupamos una foto de los pechos y una foto de las evos en el apartado que dice "GALERIA".
  `,

      ".problemas": `


Hola, parece que estás teniendo un problema. Te ofrezco dos opciones para solucionarlo:

1. Mandar un correo a nuestro soporte a: Tengofesoporte@gmail.com
2. Pagar nuestro soporte prioritario por 150 MXN, donde la atención será rápida y tu problema será solucionado al instante
  `,


      ".brain": `

NO COMPRAMOS BRAINS, RECUERDA QUE SOLO COMPRAMOS EN CASO DE QUE EN "#ANUNCIOS" LO ANUNCIEN, RECUERDA QUE NADIE DE NOSOTROS TE CONTACTARÁ POR PRIVADO!
  `,


        ".metodos": `

METODOS DE PAGO!

*ARGENTINA
MERCADO PAGO

*PERÚ
YAPE

*ESTADOS UNIDOS 
REMITLY, FELIX PAGO, XOOM 

*CRYPTO
BINANCE

*PARA CUALQUIER OTRO PAIS
PAGINA DE TENGOFE: https://tengofe.co/collections/fe-coins 
  `,

".pedidos": `


Si tienes un accesorio, skin o personaje en mente, ¡podemos hacerlo realidad! Un pedido es cuando nos solicitas un artículo específico de un videojuego que no está disponible en nuestra tienda.

¿Cómo realizar un pedido? 

1. Especifica el artículo del videojuego que deseas.
2. Indica tu presupuesto para el pedido.
3. Una vez que te demos el precio, realiza el pago.
4. ¡Listo! Nuestro equipo se encargará de conseguir el pedido.
  `,

        ".coins": `

Moneda virtual de la tienda, su utilidad es para reclamar cuentas de la propia tienda (recuerda si se vendió una cuenta que pagaste en efectivo, puedes usarlo para lo que sea pero solo una unidad)
  `,


          ".ecuador": `

Alava Ordonez Joseph Alberto             

Banco Guayaquil
Ahorro # 0047442260
businessjosephalava@gmail.com

CI: 0944095629 Yo tengo banco Guayaquil, `,


          ".poke": `
Para evaluar tu cuenta necesitamos una foto de;
*Perfil
*Shinys / variocolor
*Legendarios
*Total de pokemon

  `,

          ".checker": `

PARA EVALUAR TU CUENTA DE FORTNITE OCUPAMOS FOTO DEL CHECKER, SKINS, BAILES Y PICOS, ESTE ES EL LINK PARA SACAR IMAGENES DE TU CUENTA CON EL BOT, ES 100% LEGAL LO USAMOS NOSOTROS.

https://web.telegram.org/k/#@Raika_CheckBot

1. PARA INICIAR SESION CON EL BOT OCUPAS ABRIR EL ENLACE Y CREAR UNA CUENTA DE TELEGRAM, SI YA TIENES UNA EN EXISTENCIA SOLO INICIAR SESION
2. EL COMANDO "/START" ABRIRÁ LAS OPCIONES PARA INICIAR SESION, ENSEGUIDA DE ESO DARLE A "CONECTAR CUENTA"  E INICIAR SESION CON EPIC GAMES

EN CUANTO TENGAS LAS IMAGENES LISTAS, FAVOR DE ENVIARLAS A ESTE MISMO CHAT Y ENSEGUIDA UN EVALUADOR TE DARÁ EL PRECIO ESTIMADO
  `,
  // 👉 Aquí puedes agregar más:
  // "!comando": "texto..."
};

// CUANDO EL BOT SE CONECTA
client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

// MANEJO DE MENSAJES
client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  const contenido = msg.content.trim();

  if (comandos[contenido]) {
    msg.channel.send(comandos[contenido]);
  }
});

client.login(process.env.TOKEN);
