import {capitalize} from './stringFunction.js';
import {concatenate} from './stringFunction.js';
import {getSecondWord} from './stringFunction.js';

describe('Capitalization tests', () => {

    it('Should capitalize the first letter of a string', () => {
        expect(capitalize('capitalize')).toBe('Capitalize');
        expect(capitalize('letter')).toBe('Letter');
    });

    it('First letter of string should not be lowercase', () => {
        expect(capitalize('capitalize')).not.toBe('capitalize');
        expect(capitalize('letter')).not.toBe('letter');
    });
  });

describe('Concatenation Tests', () => {

    it('Should concatenate two strings with a space in between', () => {
      expect(concatenate('hello', 'world')).toBe('hello world');
      expect(concatenate('knocked', 'out')).toBe('knocked out');
    });

    it('Should not concatenate two strings with no space in between', () => {
      expect(concatenate('hello', 'world')).not.toBe('helloworld');
      expect(concatenate('knocked', 'out')).not.toBe('knockedout');
    });
  });

describe('Second Word Tests', () => {

    it('Should return the second word', () => {
      expect(getSecondWord('hello world, ready to code')).toBe('world,');
      expect(getSecondWord('second word or third word')).toBe('word');
    });

    it('Should not return the first word', () => {
      expect(getSecondWord('hello world')).not.toBe('hello');
      expect(getSecondWord('second word.')).not.toBe('second');
    });
  });
