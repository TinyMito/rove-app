export default function DevCss() {
  return (
    <div className="DevCss">
      <a href="https://icons.getbootstrap.com" target="_blank">Icons Library</a>

      <div className="color1" styles="width: 100px; height: 100px">Color 1</div>
      <div className="color2" styles="width: 100px; height: 100px">Color 2</div>
      <div className="color3" styles="width: 100px; height: 100px">Color 3</div>
      <div className="color4" styles="width: 100px; height: 100px">Color 4</div>
      <div className="color5" styles="width: 100px; height: 100px">Color 5</div>

      <div className="container" styles="width: 100px; height: 100px">

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>

      <input type="text" placeholder="Text Input"/>
      <button><i className="bi bi-floppy2-fill"></i> Save</button>
      <button><i className="bi bi-pencil-square"></i> Edit</button>
      <button><i className="bi bi-trash3"></i> Delete</button>
      
      <form>
          <label htmlFor="textfield">Text Field:</label>
          <input type="text" id="textfield" name="textfield"/>
          
          <label htmlFor="textarea">Text Area:</label>
          <textarea id="textarea" name="textarea" rows="4"></textarea>
          
          <label htmlFor="dropdown">Dropdown:</label>
          <select id="dropdown" name="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
          
          <label htmlFor="checkbox">Checkbox:</label>
          <div>
              <label htmlFor="checkbox1">
                  <input type="checkbox" id="checkbox1" name="checkbox" value="checkbox1"/> Checkbox 1
              </label>
          </div>
          <div>
              <label htmlFor="checkbox2">
                  <input type="checkbox" id="checkbox2" name="checkbox" value="checkbox2"/> Checkbox 2
              </label>
          </div>
          
          <label>Radio Buttons:</label>
          <div>
              <label htmlFor="radio1">
                  <input type="radio" id="radio1" name="radio" value="radio1"/> Radio 1
              </label>
          </div>
          <div>
              <label htmlFor="radio2">
                  <input type="radio" id="radio2" name="radio" value="radio2"/> Radio 2
              </label>
          </div>
          <div>
              <label htmlFor="radio3">
                  <input type="radio" id="radio3" name="radio" value="radio3"/> Radio 3
              </label>
          </div>
          
          <button type="submit">Submit</button>
      </form>

      </div>
    </div>
  );
}