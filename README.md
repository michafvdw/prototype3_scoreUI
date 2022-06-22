# Github pages

https://michafvdw.github.io/prototype3_scoreUI/

# Beschrijving

Dit is het derde prototype voor het vak programmeren 4 die ik heb gemaakt voor mijn game. In dit prototype heb ik een score toegevoegd met een UI class element. Wanneer de kat een muis aanraakt wordt er +1 bij de score opgeteld, wanneer alle muizen dood zijn wint de speler. Dit was het prototype waar ik het langst mee bezig ben geweest. Eerst probeerde ik een this.interface.addScore(1); te doen wanneer er een collision was met een kat en een muis, maar dit zorgde ervoor dat de score super hoog opliep (als die een muis aanraakte +30 in plaats van +1), dus dit werkte niet. Toen probeerde ik nog een delay erin te zetten maar dit deed ook niet zoveel. Ik kwam toen tot de conclusie dat ik het beste kon werken met de array lengte van de muizen. Dit doe ik met this.interface.addScore(this.pixi.stage.children.filter((object) => object instanceof Mouse) (Mouse.length werkte niet, dit gaf steeds een waarde terug van 2). Ik kwam toen alleen op een volgend probleem, het eerste was dat de score naar nul toeging inplaats van opliep vanaf 0. Dit heb ik opgelost door in ui.ts het volgende te zetten: this.score <b>-</b>= n. Het tweede probleem was dat ik nadat de speler verloren had nog steeds had dat de score opliep. Dit kwam omdat zodra de overgebleven muizen op de plek kwamen waar de kat "dood" was gegaan, zij ook doodgingen. Ik snapte niet helemaal waarom dit gebeurde aangezien ik wel this.pixi.stage.removeChild(this.cat); deed. Als ik de muizen deed verwijderen wannneer de speler verloor liep de score natuurlijk ook op want dan zag die dat als een extra punt dus dit was geen oplossing. Ik heb daarom het volgende bedacht om toch de score alleen te laten updaten wanneer de game nog niet gewonnen of verloren is: 

    //if cat is in game the score gets counted
        if (
          this.pixi.stage.children.filter((object) => object instanceof Cat)
          .length === 1 
      ) {

    //console.log("hallo")
    currentScore = this.pixi.stage.children.filter((object) => object instanceof Mouse)
    .length;
    currentScore = currentScore +4; 
    this.interface.addScore(currentScore);
      }
  
  Nu wordt de score alleen geupdate wanneer de kat (de speler) in het spel is. De +4 was nodig omdat de score automatisch op 4 sprong zodra het spel begon, ik weet niet waarom dit gebeurde maar dit was de enige manier waarop het me lukte om op te lossen. 
  
Het score bijhouden werkt dus wel, maar is verre van perfect. Met meer tijd zou ik hier beter naar kijken want ik denk dat er een minder omslagtige manier moet zijn om een score bij te houden dan dit.
