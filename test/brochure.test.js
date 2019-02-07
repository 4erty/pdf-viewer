import Brochure from '../src/brochure/brochure.js';
import { setTimeout } from 'timers';

describe('Testing Brochure class.', () => {
  describe('Create new class', () => {
    test('Create new class without properties', () => {
      expect(() => {
        const brochure = new Brochure({});
        brochure.init();
      }).toThrowError(new Error('Empty DOM node to create brochure'));
    });

    test(' with empty object to throw new Empty DOM node to create brochure error', () => {
      expect(() => {
        const brochure = new Brochure({});
        brochure.init();
      }).toThrowError(new Error('Empty DOM node to create brochure'));
    });
  });

  describe('Created brochure', () => {
    const node = document.createElement('div');
    const brochure = new Brochure({
      htmlNode: node,
      contentType: 'pdf',
    });
    brochure.init();

    test('has contentType property', () => {
      expect(brochure).toHaveProperty('contentType');
    });

    test('brochure.book is div HTML Element', () => {
      expect(brochure.book).toBeInstanceOf(HTMLDivElement);
    });
  });

  // describe('Created brochure', () => {
  //   const node = document.createElement('div');
  //   const brochure = new Brochure({
  //     htmlNode: node,
  //     contentType: 'pdf',
  //   });

  //   test('has pdf property', (done) => {
  //     brochure.init();
  //     setTimeout(() => done, 1000);
  //   });
  // });
});
