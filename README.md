# Vervoerregio Amsterdam | Sprint 10

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Vervoerregio Amsterdam wou een website hebben waarop een overzicht staat van alle verschillende criteria van de WCAG richtlijnen, aan de hand van de WCAG richtlijnen kan Vervoereggio Amsterdam vervolgens hun partners gaan controleren en kijken aan hoeveel van de richtlijnen hun partner website's voldoen.

![responsive](https://github.com/WesleySchorel/performance-matters-optimized-website/assets/112856287/ef96e081-4ea4-443f-8bea-d7615e9d6872)

Link naar de website: https://vervoerregio-amsterdam-sprint11.adaptable.app/

## Gebruik

### User stories

Tijdens deze sprint hebben we aan de volgende user stories gewerkt: 

"Als gebruiker wil ik een URL kunnen toevoegen aan een website, zodat ik kan bijhouden aan welke toegankelijkheidsrichtlijnen die URL voldoet" en "Als gebruiker wil ik een overzicht van toegankelijkheidsrichtlijnen kunnen bekijken, om te begrijpen wat er moet gebeuren om een website/app toegankelijker te maken"

### Gebruik van de website

De doelgroep / de gebruikers van Vervoerregio Amsterdam zijn hun medewerkers. De medewerkers kunnen deze website dus gebruiken om hun partners te controleren op toegankelijkheid volgens de WCAG richtlijnen.

De website is een projectboard waarop je een overzicht heb van alle verschillende partners van Vervoerregio Amsterdam, in het projectboard kan je een partner kiezen waardoor je vervolgens een overzicht krijgt van alle URLS die momenteel in de database staan van deze partner. Vervolgens kan je een van deze URLS aan klikken om naar de toolboard pagina te gaan waarop je de verschillende criteria kan afvinken als de website hieraan voldoet. Ook is er een formulier op de pagina waarop je extra URLS aan een specifieke partner kan toevoegen.

## Kenmerken

In dit project hebben wij gebruik gemaakt van veel verschillende technieken zoals Node,  Express, EJS, Rest API, server-/client-side JS, CSS en HTML. Met deze technieken hebben wij veel kunnen toepassen op de website zoals:

* Progressive Enchancement
* Responsive Images
* Lazy loading

### Progressive Enhancement 

Progressive Enhancement is een ontwerpprincipe voor websites die ervoor zorgt dat de basisfunctionaliteit van een website altijd beschikbaar is. Zelfs als bepaalde delen van een website niet werken.

Op de website hebben wij de toolboard pagina gemaakt en daarin rekening gehouden met Progressive Enhancement. Wij zijn begonnen met een lege HTML pagina en daarin eerst een summary/detail element ingezet zodat wij een altijd werkende dropdown menu kregen die ook werkt wanneer de JS dus niet werkt, vervolgens zijn wij bezig geweest om dit te stylen zodat het er net en goed uit kwam te zien. Nadat dit was gedaan hebben wij met client-side JS ervoor gezorgd dat je altijd maar 1 detail/summary element open kan hebben staan en dat wanneer je er 1 sluit je naar de bovenkant gaat van degene die je hebt geopent. 

### Realtime Chat & UI States

Wij hebben een chat toegevoegd waarmee medewerkers van vervoerregio met elkaar kunnen communiceren als ze aan de zelfde pagina zouden werken. 

Deze chat hebben wij gemaakt met Socket en is gebasseerd op de le chat website van Justus Sturkenboom. Er zijn nog een paar extra dingen die wij hebben toegevoegd op de website namelijk, een functie om de tijd te zien van wanneer een bericht is gepost & hebben wij UI States toegevoegd. Als UI States hebben wij een error, ideal, loading en empty state.

### UI Stack

Wireflow en Breakddown-schets van de connecting-people-ui-stack deeltaak. Hier hebben wij een wireflow en breakdown schets gemaakt met verschillende states. We hebben voor elke state uitgelegd hoe het er precies uit zou komen te zien. Bij elke state staat hoe wij het zouden kunnen maken in komen bijvoorbeeld door ``` window.navigator.onLine en ioServer.on(history), ioServer.on(reconnect, (attempts)) ```

![image](https://github.com/RickVellingaa/connecting-people-realtime-web-app/assets/112857487/ac244447-e2d3-4c60-9217-ef3f9dded1ef)

### Rest API

In dit project maak ik gebruik van de REST API for Toolgankelijkheid van Vervoerregio Amsterdam. De documentatie van deze Api is te vinden op: https://api.vervoerregio-amsterdam.fdnd.nl/

## Installatie

Download of clone dit project van deze Github pagina.

Download de aanbevolen versie op nodejs.org en installeer vanaf deze wwebsite de Node ontwikkelomgeving. Tijdens dit project heb ik gebruik gemaakt van 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces van Node.

Open de terminal in Visual Studio Code en installeer Node doormiddel van het commando npm init. Voer hierna npm install uit. Om de pagina te open start je een server op door middel van npm start. Als de server weer gesloten moet worden kan je control + c / ^c gebruiken.

## Bronnen
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/
