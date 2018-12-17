const app = new Vue({
  el: '#app',
  data: {
    message: "",
    encodedMessage: "",
    decodedMessage: "",
    characterList:
      [
      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      '$','#','@','?','/','%','^','&','*','=','+','-','!'
      ],
    shiftAmount: 10

  },
  watch: {
    message: function() {
      this.encodeMessage(this.shiftAmount);
      this.decodeMessage(this.shiftAmount);
    },
  },
  methods: {
    encodeMessage: function(amount) {
      let m = this.message.split('');
      let v;
      for (let i = 0; i < m.length; i++) {
        v = this.characterList.indexOf(m[i]) + amount;
        while (v > this.characterList.length) {
          v -= this.characterList.length;
        }
        if (m[i] != ' ') {
          m[i] = this.characterList[v];
        }
      }
      this.encodedMessage = m.join('');
    },
    decodeMessage: function(amount) {
      let m = this.encodedMessage.split('');
      let v;
      for (let i = 0; i < m.length; i++) {
        v = this.characterList.indexOf(m[i]) - amount;
        while (v < 0) {
          v += this.characterList.length;
        }
        if (m[i] != ' ') {
          m[i] = this.characterList[v];
        }
        this.decodedMessage = m.join('');
      }
    }
  }
});
