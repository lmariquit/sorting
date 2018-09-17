
describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); 
        //spyOn is necessary for seeing if a function was called
      });

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('if already sorted, swaps 0 times', function (){
        bubbleSort([1,2,3])
        expect(swap.calls.count()).toEqual(0) // works with spyOn
    })

    it('if only one thing to sort, swaps once', function (){
        bubbleSort([1,3,2,4,5])
        expect(swap.calls.count()).toEqual(1) // works with spyOn
    })

    it('it recognizes an already sorted array', function(){
      expect( bubbleSort([1,2,3]) ).toEqual( [1,2,3] );
    });

    it('it sorts a reverse-sorted array', function(){
      expect( bubbleSort([3,2,1]) ).toEqual( [1,2,3] );
    });
    it('it sorts a randomely sorted array', function(){
      expect( bubbleSort([1,2,3]) ).toEqual( [1,2,3] );
    });
  });