<template lang="html">
  <div class="faith">
    <div class="faith-header" data-aos="fade-up">
      <h1 class="h1-font text-uppercase text-white text-center">во что мы верим</h1>
    </div>
    <b-container class="py-5">
      <b-row v-for="(item, index) in items" :key="index" class="mb-4">
        <b-col data-aos="fade-right" cols="12" lg="12">
          <h2 class="h2-font font-weight-bold mb-3">{{item.title}}</h2>
          <h3 class="h3-font font-weight-bold mb-3">{{item.body}}</h3>
          <ul>
            <li
              v-for="(el, indx) in item.list"
              :key="indx"
              class="mb-2">{{el}}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col data-aos="fade-right" cols="12" lg="12">
          <h2 class="h2-font font-weight-bold mb-3">9. Церковь и ее миссия</h2>
          <h3 class="h3-font font-weight-bold mb-3">Мы верим, что:</h3>
          <ul>
            <li class="mb-2">Церковь – это Тело Христово, главой которого является Иисус Христос и которое состоит из рожденных свыше людей;</li>
            <li class="mb-2">Церковь призвана Богом исполнить Его план для человечества; существует единая вселенская Церковь и множество поместных церквей;</li>
            <li class="mb-2">вселенская Церковь состоит из всех спасенных Христом, ныне живых и умерших в Боге, без различия рас, языков и этнической принадлежности;</li>
            <li class="mb-2">поместная церковь – это собрание возрожденных свыше верующих, организованное и управляемое Духом Святым через дары служения; христиане каждой поместной церкви собираются вместе для прославления Бога, а также для назидания, увещания и общения друг с другом;</li>
            <li class="mb-2">земная миссия Российской Церкви христиан веры евангельской как части вселенской Церкви выражается в следующем:
              <ul class="dash">
                <li class="li-dash mt-2 mb-2">быть Божьим инструментом в евангелизации мира;</li>
                <li class="li-dash mb-2">быть действенным средством для распространения Царствия Божьего в стране и за рубежом;</li>
                <li class="li-dash mb-2">быть Телом Христовым, в котором человек поклоняется и служит Богу;</li>
                <li class="li-dash mb-2">быть местом, где каждый верующий преображается в образ Христов;</li>
                <li class="li-dash mb-2">быть народом, демонстрирующим Божью любовь и сострадание ко всему миру.</li>
              </ul>
            </li>

          </ul>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col data-aos="fade-right" cols="12" lg="12">
          <h2 class="h2-font font-weight-bold mb-3">10. Служение</h2>
          <h3 class="h3-font font-weight-bold mb-3">Мы верим, что:</h3>
          <ul>
            <li class="mb-2">каждому христианину необходимо посвятить всю свою жизнь для служения Господу в соответствии с Божьим призванием;</li>
            <li class="mb-2">каждый христианин обязан:
              <ul class="dash">
                <li class="li-dash mt-2 mb-2">любить Бога и поклоняться Ему в духе и истине;</li>
                <li class="li-dash mb-2">быть Божьим инструментом для назидания других верующих;</li>
                <li class="li-dash mb-2">нести Евангелие Царствия;</li>
                <li class="li-dash mb-2">служить людям в любви и сострадании.</li>
              </ul>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col data-aos="fade-right" cols="12" lg="12">
          <h2 class="h2-font font-weight-bold mb-3">11. Божественное исцеление</h2>
          <h3 class="h3-font font-weight-bold mb-3">Мы верим, что:</h3>
          <ul>
            <li class="mb-2">Божественное исцеление – неотъемлемая часть Евангелия Царствия, важный элемент проявления Божьей силы в Церкви;</li>
            <li class="mb-2">освобождение от болезней обеспечено через искупительную жертву Иисуса Христа на кресте, которая дает возможность верующему получить исцеление по молитве веры.</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col data-aos="fade-right" cols="12" lg="12">
          <h2 class="h2-font font-weight-bold mb-3">12. О будущем</h2>
          <h3 class="h3-font font-weight-bold mb-3">Мы верим, что:</h3>
          <ul>
            <li class="mb-2">Иисус Христос вновь придет на землю второй раз;</li>
              <li class="mb-2">главными целями второго пришествия Господа являются:
                <ul class="dash">
                  <li class="li-dash mt-2 mb-2">восхищение Церкви;</li>
                  <li class="li-dash mb-2">спасение остатка еврейской нации;</li>
                  <li class="li-dash mb-2">поражение антихриста;</li>
                  <li class="li-dash mb-2">суд над языческими народами;</li>
                  <li class="li-dash mb-2">установление Своего тысячелетнего Царствия на земле;</li>
                </ul>
              </li>
              <li class="mb-2">первое воскресение умерших во Христе и присоединение к ним тех, кто останется в живых в ожидании пришествия Господа, является непосредственной и благословенной надеждой Церкви;</li>
              <li class="mb-2">видимое возвращение Господа на землю с Его святыми приведет к спасению народа Израиля и установит всеобщий мир на нашей планете;</li>
              <li class="mb-2">все остальные умершие воскреснут в день второго воскресения для суда у великого белого престола, где будут судимы согласно их поступкам:
                <ul class="dash">
                  <li class="li-dash mt-2 mb-2">одни унаследуют жизнь вечную;</li>
                  <li class="li-dash mb-2">другие – вечное осуждение;</li>
                </ul>
              </li>
              <li class="mb-2">по обетованию Господа нас ожидают новое небо и новая земля, «на которых обитает правда».
              </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: '1. Священное писание',
          body: 'Мы верим, что:',
          list: [
            'Священное Писание, данное нам в 66 канонических книгах Ветхого и Нового Заветов – дословно богодухновенное, не подлежащее изменению откровение Бога;',
            'Священное Писание, представляя высшую и окончательную истину, является самым авторитетным правилом веры и поведения.',
          ],
        },
        { title: '2. Бог',
          body: 'Мы верим, что:',
          list: [
            'есть один Бог, особым образом вечно существующий в Трех Лицах – Отец, Сын и Святой Дух;',
            'Бог – Дух, Единый по Своей сущности и Его атрибуты открыты нам в Священном Писании;',
            'Бог – Создатель видимого и невидимого миров, сотворивший все сущее из ничего.',
          ],
        },
        { title: '3. Иисус Христос',
          body: 'Мы верим, что:',
          list: [
            'Иисус Христос – предвечный Сын Божий, Слово, истинный Бог и истинный Человек, Второе Лицо Святой Троицы;',
            'в одной Личности Господа Иисуса Христа таинственно соединились неслиянно, неизменно, неразлучимо и неразделимо две природы: божественная и человеческая;',
            'Он принял плоть от Духа Святого и девы Марии, сойдя на землю ради спасения людей, прожил безгрешную жизнь, был распят на кресте, сделавшись заместительной жертвой перед Отцом для искупления людей, телесно воскрес из мертвых для оправдания нашего, вознесся на небеса и воссел одесную Отца;',
            'Иисус Христос вновь видимо возвратится на землю в силе и славе для тысячелетнего правления.',
          ],
        },
        { title: '4. Грехопадение',
          body: 'Мы верим, что:',
          list: [
            'изначально человек был создан Творцом по образу и подобию Божьему невинным, безгрешным и праведным;',
            'человек, будучи свободным, по собственной воле нарушил заповедь Божию и через это стал грешным и смертным, что отделило его от Создателя;',
            'всеобъемлющая греховность и смертность распространилась на всех людей, оттого каждый человек от своих родителей наследует греховную природу и смерть.',
          ],
        },
        { title: '5. Спасение',
          body: 'Мы верим, что:',
          list: [
            'спасение человека исходит от Бога по благодати и его основанием является Голгофская жертва Иисуса Христа за грехи человечества;',
            'человек принимает спасение посредством покаяния пред Богом и веры в Евангелие;',
            'возрождение Духом Святым абсолютно необходимо для личного спасения и является результатом покаяния и веры;',
            'внутренним свидетельством спасения человека является прямое свидетельство от Духа Святого;',
            'внешнее свидетельство спасения – жизнь спасенного в праведности и Божьей святости.',
          ],
        },
        { title: '6. Постановления Христа для Церкви',
          body: 'Мы верим, что:',
          list: [
            'все раскаявшиеся и верующие в Иисуса Христа, как в личного Спасителя и Господа, должны быть крещены во имя Отца, Сына и Святого Духа посредством полного погружения в воду, согласно повеления Иисуса Христа;',
            'водным крещением они провозглашают миру о своей смерти со Христом для греха и совоскресении с Ним для новой жизни, а так же обещают Богу свою добрую совесть;',
            'Причастие, состоящее из хлеба и плода виноградного, представляет собой символ единства Церкви, напоминает о Христовых страданиях и смерти, а также возвещает о Его втором пришествии;',
            'всем верующим во Христа надлежит совершать Причастие «доколе Он придет».',
          ],
        },
        { title: '7. Крещение Духом Святым',
          body: 'Мы верим, что:',
          list: [
            'все верующие в Иисуса Христа, как своего личного Спасителя, имеют обетование крещения Духом Святым;',
            'основными целями крещения Духом Святым являются: принятие сверхъестественной силы для христианской жизни, получение духовных даров для служения в Церкви, которая духовно есть Тело Христово;',
            'опыт крещения Духом Святым отличается от опыта возрождения свыше;',
            'физическим доказательством принятия крещения Духом Святым является знамение говорения на иных языках.',
          ],
        },
        { title: '8. Освящение',
          body: 'Мы верим, что:',
          list: [
            'Бог призывает нас жить в святости и Его воле, которую мы способны исполнить только с помощью Духа Святого;',
            'освящение является актом отделения от греха и посвящения себя Богу;',
            'процесс освящения осуществляется в жизни христианина посредством:',
            'признания и принятия верой своего союза со Христом в Его смерти и воскресении;',
            'постоянного водительства Духом Святым во всех сферах жизни.',
          ],
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.faith-header {
  background: url('../assets/img/faith.jpg') no-repeat;
  background-size: cover;
  padding: 5rem 0;
}
.dash {
  list-style: none;
    .li-dash:before {
      content: "—";
      position: relative;
      left: -5px;
      padding-left: 10px;
    }
}
</style>
