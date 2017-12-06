import { StringReversePipe } from './string-reverse.pipe';

describe('StringReversePipe', () => {
  it('create an instance', () => {
    const pipe = new StringReversePipe();
    expect(pipe).toBeTruthy();
  });

  it(' convert "I love to code" to "edoc ot evol I"', () => {
    const pipe = new StringReversePipe();
    expect(pipe.transform('I love to code')).toBe('edoc ot evol I');
  });

  it(' convert "123456789" to "987654321"', () => {
    const pipe = new StringReversePipe();
    expect(pipe.transform('123456789')).toBe('987654321');
  });
});
