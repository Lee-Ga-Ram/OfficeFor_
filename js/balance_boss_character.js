if(!window['lezhin']) {
	lezhin = {};
	( function (_O) {
    _O.init = () => {
      const v = _O.Vars;
      v.curRound = 16;
      v.curStage = 0;
      v.gameHistory = {
        '16': [],
        '8': [],
        '4': [],
        '2': [],
        '1': []
      };
      v.lists = _O.Ctrl.getLists();
      _O.Ctrl.prevCancelOnOff();
    };
    _O.start = () => {
      _O.init();
      _O.Ctrl.gameNewStart.bind(_O.Ctrl)();
    };
    _O.Vars = {
      lists:null,
      curRound: 0,
      curStage: 0,
      maxRound: 16,
      gameHistory: null
    };
    _O.Ctrl = {
      getLists() {
        return [
          {
            name: '고길동',
            imgSrc: 'images/boss_character/01.png',
            selected: false
          },
          {
            name: '그림하일드',
            imgSrc: 'images/boss_character/02.png',
            selected: false
          },
          {
            name: '노진구',
            imgSrc: 'images/boss_character/03.png',
            selected: false
          },
          {
            name: '둘리',
            imgSrc: 'images/boss_character/04.png',
            selected: false
          },
          {
            name: '비실이',
            imgSrc: 'images/boss_character/05.png',
            selected: false
          },
          {
            name: '에디',
            imgSrc: 'images/boss_character/06.png',
            selected: false
          },
          {
            name: '우슬라',
            imgSrc: 'images/boss_character/07.png',
            selected: false
          },
          {
            name: '집게사장',
            imgSrc: 'images/boss_character/08.png',
            selected: false
          },
          {
            name: '징징이',
            imgSrc: 'images/boss_character/09.png',
            selected: false
          },
          {
            name: '짱구',
            imgSrc: 'images/boss_character/10.png',
            selected: false
          },
          {
            name: '철수',
            imgSrc: 'images/boss_character/11.png',
            selected: false
          },
          {
            name: '톰',
            imgSrc: 'images/boss_character/12.png',
            selected: false
          },
          {
            name: '퉁퉁이',
            imgSrc: 'images/boss_character/13.png',
            selected: false
          },
          {
            name: '트리메인 부인',
            imgSrc: 'images/boss_character/14.png',
            selected: false
          },
          {
            name: '한스',
            imgSrc: 'images/boss_character/15.png',
            selected: false
          },
          {
            name: '훈이',
            imgSrc: 'images/boss_character/16.png',
            selected: false
          }
        ];
      },
      rndLists(arr) { //배열 랜덤 섞음
        return arr.map((n) => { return [Math.random(), n] }).sort().map((n) => {  return n[1] });//n[1].selected = false;
      },
      selectedLists(arr) {
        return arr.filter((n) => n.selected === true);
      },
      gameNewStart() {
        const v = _O.Vars;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        _O.Html.set.bind(_O.Html)();
      },
      copyObj(obj) { //Deep Copy
        let copy = {};
        for (let attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
          }
        }
        copy.selected = false;
        return copy;
      },
      nextRound() {
        const v = _O.Vars;
        if(v.curRound <= 1) return;
        v.lists = _O.Ctrl.selectedLists(v.gameHistory[v.curRound.toString()]).map((n) => _O.Ctrl.copyObj(n));
        if(v.curRound > 1) v.curRound /= 2;
        v.curStage = 0;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        // console.log('v.lists::',v.lists, 'v.gameHistory::',v.gameHistory);
        _O.Html.setRoundTitle();
      },
      prevCancelOnOff() {
        const footerObj = document.getElementById('footer');
        if(_O.Vars.curRound === _O.Vars.maxRound) {
          if(_O.Vars.curRound > 1 && _O.Vars.curStage > 0) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        } else {
          if(_O.Vars.curRound > 1) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        }
      }
    };
    _O.Event = {
      clickItem(obj) {
        const v = _O.Vars;
        if(v.curRound === 1) return;
        const idx = obj.id.split('_')[1];
        v.gameHistory[v.curRound.toString()][idx].selected = true;
        if(v.curStage < v.curRound/2) v.curStage++;
        if(v.curStage === v.curRound/2) _O.Ctrl.nextRound();
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      },
      overItem(obj) {
        const objs = document.querySelectorAll('#list_ideal li a[hover="true"]');
        objs.forEach((itm) => itm.setAttribute('hover', 'false'));
        if(obj.getAttribute('hover') === 'true') return;
        obj.setAttribute('hover', 'true');
      },
      outItem(obj) {
        if(obj.getAttribute('hover') === 'false') return;
        obj.setAttribute('hover', 'false');
      },
      clickCancel() {
        _O.start();
      },
      clickPrev() {
        const v = _O.Vars;
        if(v.curStage > 0) v.curStage--;
        else {
          v.gameHistory[v.curRound.toString()] = [];
          if(v.curRound < _O.Vars.maxRound) {
            v.curRound *= 2;
            v.curStage = v.curRound / 2 - 1;
          }
          _O.Html.setRoundTitle();
          v.lists = v.gameHistory[v.curRound.toString()];
        }

        v.lists[v.curStage * 2].selected = false;
        v.lists[v.curStage * 2 + 1].selected = false;
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      }
    };
    _O.Html = {
      set() {
        this.setRoundTitle();
        this.setContent();
      },
      setHistory() {
        const tObj = document.getElementById('modal');
        let key, roundDiv, imgObj, roundTitleDiv, roundImgWrapDiv;
        let historyTitleDiv = document.createElement('DIV');
        historyTitleDiv.className = 'tit';
        historyTitleDiv.innerText = '결과';
        tObj.appendChild(historyTitleDiv);
        let wrapDiv = document.createElement('DIV');
        wrapDiv.className = 'history_box';
        for(key in _O.Vars.gameHistory) {
          roundDiv = document.createElement('DIV');
          roundDiv.className = 'round';
          roundTitleDiv = document.createElement('h5');
          roundTitleDiv.innerText = (key === '1' ? `` : `${key}강`);
          roundDiv.appendChild(roundTitleDiv);
          roundImgWrapDiv = document.createElement('DIV');
          _O.Vars.gameHistory[key].forEach((itm) => {
            imgObj = document.createElement('IMG');
            imgObj.setAttribute('src', itm.imgSrc);
            imgObj.className = `history_item ${itm.selected ? '' : (key !== '1' ? 'dim' : '')}`;
            roundImgWrapDiv.appendChild(imgObj);
          });
          roundDiv.appendChild(roundImgWrapDiv);
          wrapDiv.appendChild(roundDiv);
        }
        tObj.appendChild(wrapDiv);
      },
      setRoundTitle() {
        if(_O.Vars.curRound > 1) document.getElementById('roundTitle').innerText = `${_O.Vars.curRound}`;
        else document.getElementById('roundTitle').innerText = ``;
      },
      setItem() {
        const s = _O.Html.getItem();
        const tObj = document.getElementById('list_ideal');
        if(!tObj) return;
        tObj.innerHTML = s;
        if(_O.Vars.curRound === 1) _O.Html.setHistory();
      },
      getItem() {
        let s = '', i = _O.Vars.curStage * 2, length = i + (_O.Vars.curRound > 1 ? 2 : _O.Vars.curRound);
        for(i; i < length && length <= _O.Vars.curRound; i++) {
          s += `
          <li>
            <a class="item ${_O.Vars.curRound === 1 ? 'final' : ''}" id="item_${i}" hover="false" href="javascript:void(0);" onclick="lezhin.Event.clickItem(this);" onmouseover="lezhin.Event.overItem(this);" onmouseout="lezhin.Event.outItem(this);">
              <span class="thumb"><img src="${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['imgSrc']}" alt="상사캐릭터"></span>
              <strong> ${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['name']}</strong>
            </a>
          </li>
          `;
          if(_O.Vars.curRound === 1) {
            s += `
            <li id="history">
              <a class="modal final" id="modal" href="javascript:void(0);"></a>
            </li>
            `;
          }
        }
        return s;
      },
      setContent() {
        const tObj = document.getElementById('content');
        tObj.className = 'content in_game';
        let s = `
          <ul class="list_ideal" id="list_ideal">
          ${this.getItem()}
          </ul>
        `;
        tObj.innerHTML = s;
      }
    }
	}) (lezhin);
}