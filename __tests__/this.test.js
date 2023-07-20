import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './otherScripts.js';

function handleTriangleForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const length2 = parseInt(document.querySelector('#length2').value);
  const length1 = parseInt(document.querySelector('#length1').value);
  const length3 = parseInt(document.querySelector('#length3').value);
  const triangle = new Triangle(length1, length2, length3);
  const response = triangle.checkType();
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});


describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test('should correctly determine whether three lengths make an isosceles triangle', () => {
    const isocTriangle = new Triangle(5,5,7)
    expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  });

  test('should correctly determine whether three lengths make an scalene triangle', () => {
    const scalTriangle = new Triangle(2,3,4)
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });

  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    const equiTriangle = new Triangle(5,5,5)
    expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  });

});