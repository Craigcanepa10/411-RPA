import Form from 'react-bootstrap/Form'
import './FASH.css'
function App() {
    return (
        <div className="Apppt">
            <p>Lets take it to the left now yall</p>
            <Form>
  {['checkbox', 'radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
    </div>
  ))}
</Form>
        </div>

    );
}
export default App;