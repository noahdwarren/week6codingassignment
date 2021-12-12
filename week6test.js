let expect = chai.expect;

describe('MyFunctions', function(){
    describe('createPlayer', function(){
        it('should take a deck perameter to use later, give a prompt asking for a name, put the deck and the returned name through the Player class and then push the resulting player object to an array', function() {
            let test = createPlayer(sam, deck1);
            expect(test).to.equal([sam, deck1]);
        });

        it('should throw an error if not given both variables', function() {
            expect(function() {
                createPlayer();
            }).to.throw(Error);
        })
    });
});

