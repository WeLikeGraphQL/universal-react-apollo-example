import setLanguage from 'actions';
import { expect } from 'chai';

describe('actions', () => {
  it('should create setLanguage action', () => {
    const lang = 'gb';
    const expectedAction = {
      type: 'SET_LANGUAGE',
      lang,
    };
    expect(setLanguage(lang)).to.deep.equal(expectedAction);
  });
});
