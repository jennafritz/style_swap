import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createClothing, fetchUserClothings, fetchCurrentClosetClothings } from "../reducers/clothingsReducer"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/esm/Form"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/esm/Button"

function AddClothingFormComponent() {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.users.currentUser)  
    
    const [showForm, setShowForm] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        color: "",
        brand: "",
        size: "",
        condition: "",
        description: "",
        value: "",
        image_url: "",
        category: "",
        user_id: ""
    })

    useEffect(() => {
        setFormData({
            ...formData,
            user_id: currentUser.id
        })
    }, [])

    const handleChange = (event) => {
        const key = event.target.id
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    }

    const checkFormData = () => {
        let formKeys = Object.keys(formData)
        return formKeys.every(key => formData[key] !== "")
        }


    return(
        <>
        {showForm
            ?
            <Container className="overallComponentContainer">
                <Row as="h1">Add a New Piece to Your Closet</Row>
                <Form
                onSubmit={(event) => {
                    event.preventDefault()
                    if(checkFormData()){
                        dispatch(createClothing(formData))
                        .then(response => {
                            if(response.payload.error){
                                alert(response.payload.error)
                            } else {
                                dispatch(fetchUserClothings(currentUser.id))
                                dispatch(fetchCurrentClosetClothings(currentUser.id))
                                setFormData({
                                    name: "",
                                    color: "",
                                    brand: "",
                                    size: "",
                                    condition: "",
                                    description: "",
                                    value: "",
                                    image_url: "",
                                    category: "",
                                    user_id: ""
                                })
                                setShowForm(false)
                            }
                        })
                    } else {
                        alert("Please fill in all fields")
                    }
                }}
                >
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control
                    placeholder="Name"
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                    />

                    <Form.Control
                    placeholder="Brand"
                    onChange={handleChange}
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    required
                    />

                    <Form.Control
                    required
                    placeholder="Color"
                    onChange={handleChange}
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    />

                    <Form.Select
                    required
                    placeholder="Size"
                    onChange={handleChange}
                    id="size"
                    name="size"
                    value={formData.size}
                    defaultValue="Select Size"
                    >
                        <option hidden>Select Size</option>
                        <option value="X-Small">XS</option>
                        <option value="Smalll">S</option>
                        <option value="Medium">M</option>
                        <option value="Large">L</option>
                        <option value="X-Large">XL</option>
                    </Form.Select>

                    <Form.Select
                    placeholder="Condition"
                    onChange={handleChange}
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    required
                    >
                        <option hidden>Select Condition</option>
                        <option value="New">New</option>
                        <option value="Like New">Like New</option>
                        <option value="Gently Used">Gently Used</option>
                        <option value="Normal Wear">Normal Wear</option>
                        <option value="Heavily Used">Heavily Used</option>
                        <option value="Destroyed-Chic">Destroyed-Chic</option>
                    </Form.Select>

                    <Form.Control
                    placeholder="Description"
                    onChange={handleChange}
                    type="textarea"
                    id="description"
                    name="description"
                    value={formData.description}
                    required
                    />

                    <Form.Control
                    placeholder="Value"
                    onChange={handleChange}
                    type="number"
                    id="value"
                    name="value"
                    value={formData.value}
                    required
                    min="0"
                    />

                    <Form.Control
                    placeholder="Image"
                    onChange={handleChange}
                    type="text"
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    required
                    />

                    <Form.Select
                    placeholder="Category"
                    onChange={handleChange}
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    required
                    >
                        <option hidden>Select Category</option>
                        <option value="Top">Top</option>
                        <option value="Bottoms">Bottoms</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Dress">Dress</option>
                        <option value="Accessory">Accessory</option>
                        <option value="Socks">Socks</option>
                    </Form.Select>

                    <Form.Control
                        className="submitInput"
                        type="submit"
                    />

                </Form>
            </Container>
            :
            <Container className="overallComponentContainer">
                <Row as="h2" className="sectionTitle">Picked up a new style recently? Add it to your closet below</Row>
                <Button onClick={() => setShowForm(true)}>Add New Piece</Button>
            </Container>
            }
        </>
    )
}

export default AddClothingFormComponent