'use strict';

const HashTable = require('../lib/hash-table.js');

describe('Hash Table test', function(){


  describe('Modules exist', () => {
    it('Should exist', () => {
      expect(HashTable).toBeDefined();
    });

    it('Should exist', () => {
      expect(new HashTable()).toBeInstanceOf(Object);
    });
  });

  describe('Valid input', function(){

    describe.only('HASH Method', () => {
      it('Should create a hash from a number that is a number', () =>{
        let ht = new HashTable(); 
        let val = 33;
        expect(ht.hash(val)).toEqual(Math.floor(ht.size % val));
      });

      it('Should create a hash from a number that is a number, even if 0', () =>{
        let ht = new HashTable(); 
        let val = 0;
        expect(ht.hash(val)).toEqual(0);
      });

      it('Should create a hash from a number that is a number, even if value has a decimal', () =>{
        let ht = new HashTable(); 
        let val = 34.9848;
        expect(ht.hash(val)).toEqual(Math.floor(ht.size % val));
      });

      it('Should create a hash from a string that is a number', () =>{
        let ht = new HashTable(); 
        let val = 'hello';
        expect(ht.hash(val)).toEqual(Math.floor(ht.size % val.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0)));
      });

    });

  
    describe('SET Method', () => {

      it('Should create a hash table with one index and a linked list with two numeric values.', () => {
        let ht = new HashTable(20); 
        ht.set(6);
        ht.set(9);
        let bucket = ht.buckets.filter(bucket => bucket)[0];
        let values = [];
        let node = bucket.head;
        while (node) {
          values.push(node.value.value);
          node = node.next;
        }
        expect(values).toEqual(expect.arrayContaining([6,9]));
      });

      it('Should create a hash table with 2 indexes each with a linked list with one numeric value.', () => {
        let ht = new HashTable(20); 
        ht.set(6);
        ht.set(7);
        let buckets = ht.buckets.filter(bucket => bucket);
        let values = [];
        buckets.forEach(bucket => {
          let value = [];
          let node = bucket.head;
          while (node) {
            value.push(node.value.value);
            node = node.next;
          }
          values.push(value);
        });
        expect(values).toEqual(expect.arrayContaining([[6],[7]]));
      });

      it('Should update a hash table with with a new numeric value.', () => {
        let ht = new HashTable(); 
        let init = 6;
        let newVal = 9;
        ht.set(init);
        ht.set(init, newVal);
        let bucket = ht.buckets.filter(bucket => bucket)[0];
        let value = bucket.head.value.value;
        expect(value).not.toEqual(init);
        expect(value).toEqual(newVal);
      });

      it('Should create a hash table with one index and a linked list with two values with strings as input.', () => {
        let ht = new HashTable(20); 
        ht.set('aaz');
        ht.set('aby');
        let bucket = ht.buckets.filter(bucket => bucket)[0];
        let values = [];
        let node = bucket.head;
        while (node) {
          values.push(node.value.value);
          node = node.next;
        }
        expect(values).toEqual(expect.arrayContaining(['aaz','aby']));
      });

      it('Should create a hash table with 2 indexes each with a linked list with one value.', () => {
        let ht = new HashTable(); 
        ht.set('aaa');
        ht.set('bbb');
        let buckets = ht.buckets.filter(bucket => bucket);
        let values = [];
        buckets.forEach(bucket => {
          let value = [];
          let node = bucket.head;
          while (node) {
            value.push(node.value.value);
            node = node.next;
          }
          values.push(value);
        });
        expect(values).toEqual(expect.arrayContaining([['aaa'],['bbb']]));
      });

      it('Should update a hash table with with a new numeric string value.', () => {
        let ht = new HashTable(); 
        let init = 'Mighty Mouse';
        let newVal = 'Courageous Cat';
        ht.set(init);
        ht.set(init, newVal);
        let bucket = ht.buckets.filter(bucket => bucket)[0];
        let value = bucket.head.value.value;
        expect(value).not.toEqual(init);
        expect(value).toEqual(newVal);
      });

      it('Should create a hash table with one index and a linked list with two values with objects as input.', () => {
        let ht = new HashTable(); 
        let clowns = [{id: 47, name: 'Bobo', job: 'pants tester', hours: '9-5' }, {id: 141, name: 'Carl' ,job: 'clown car detailer', hours: '6-11'}];
        clowns.forEach(clown => ht.set(clown.id, clown));

        let bucket = ht.buckets.filter(bucket => bucket)[0];
        let values = [];
        let node = bucket.head;
        while (node) {
          values.push(node.value.value);
          node = node.next;
        }
        expect(values).toEqual(expect.arrayContaining(clowns));
      });

      it('Should create a hash table with 2 indexes each with a linked list with one value with objects.', () => {
        let ht = new HashTable(); 
        let clowns = [{id: 47, name: 'Bobo', job: 'pants tester', hours: '9-5' }, {id: 419, name: 'Carl' ,job: 'clown car detailer', hours: '6-11'}];
        clowns.forEach(clown => ht.set(clown.id, clown));

        let buckets = ht.buckets.filter(bucket => bucket);
        let values = [];
        buckets.forEach(bucket => {
          let value = [];
          let node = bucket.head;
          while (node) {
            value.push(node.value.value);
            node = node.next;
          }
          values.push(value);
        });
        expect(values).toEqual(expect.arrayContaining([[clowns[0]],[clowns[1]]]));
      });

      it('Should update a hash table with with a new numeric string value.', () => {
        let clowns = [{id: 47, name: 'Bobo', job: 'pants tester', hours: '9-5' }, {id: 47, name: 'Carl' ,job: 'clown car detailer', hours: '6-11'}];
        let ht = new HashTable(); 
        let init = clowns[0].id;
        let newVal = clowns[1];
        ht.set(init, clowns[0]);
        ht.set(init, newVal);
        let bucket = ht.buckets.filter(bucket => bucket)[0];
        let value = bucket.head.value.value;
        expect(value).not.toEqual(init);
        expect(value).toEqual(newVal);
      });
    });

    

    beforeAll(() => {
      this.ht = new HashTable(); 
      this.items = [11 ,'marbles', {id: 47, name: 'Bobo', job: 'pants tester', hours: '9-5' }];
      this.items.forEach(item => {
        if (item.hasOwnProperty('id')) return this.ht.set(item.id, item);
        this.ht.set(item);
      });
    });

    describe('GET Method', () => {

      it('Should retrieve a numerical value from a hash table ', () => {
        expect(this.ht.get(this.items[0])).toEqual(this.items[0]);
      });

      it('Should retrieve a string value from a hash table ', () => {  
        expect(this.ht.get(this.items[1])).toEqual(this.items[1]);
      });

      it('Should retrieve an object from a hash table ', () => {
        expect(this.ht.get(this.items[2].id)).toEqual(this.items[2]);
      });

      it('Should return null if the item does not exist ', () => {
        expect(this.ht.get('Waldo')).toBeNull();
      });
    });

    describe('REMOVE Method', () => {
      it('Should remove a numerical value from a hash table ', () => {
        expect(this.ht.remove(this.items[0])).toEqual(this.items[0]);
        expect(this.ht.get(this.items[0])).toBeNull();
      });

      it('Should remove a string value from a hash table ', () => {
        expect(this.ht.remove(this.items[1])).toEqual(this.items[1]);
        expect(this.ht.get(this.items[1])).toBeNull();
      });

      it('Should remove a string value from a hash table ', () => {
        expect(this.ht.remove(this.items[2].id)).toEqual(this.items[2]);
        expect(this.ht.get(this.items[2].id)).toBeNull();
      });

      it('Should return null if the item does not exist ', () => {
        expect(this.ht.remove('Waldo')).toBeNull();
      });

    });

  });

  describe('Invalid input', () => {
  
    describe('set Method', () => {

      it('Should throw an error for bad input', () => {
        expect(() => new HashTable().set(['array'])).toThrow();
      });

    });

    describe('GET Method', () => {

      it('Should throw an error for bad input', () => {
        expect(() => new HashTable().get(['array'])).toThrow();
      });

    });

    describe('REMOVE Method', () => {

      it('Should throw an error for bad input', () => {
        expect(() => new HashTable().remove(['array'])).toThrow();
      });

    });

  });

});