import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createClothing, fetchUserClothings, fetchCurrentClosetClothings } from "../reducers/clothingsReducer"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/esm/Form"
import Row from "react-bootstrap/esm/Row"

function AddClothingFormComponent() {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.users.currentUser)    

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
        <Container>
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
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
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
                    <option value="new">New</option>
                    <option value="like_new">Like New</option>
                    <option value="gently_used">Gently Used</option>
                    <option value="normal_wear">Normal Wear</option>
                    <option value="destroyed_chic">Destroyed Chic</option>
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
                    <option value="shirt">Top</option>
                    <option value="bottoms">Bottoms</option>
                    <option value="shoes">Shoes</option>
                    <option value="dress">Dress</option>
                    <option value="accessory">Accessory</option>
                    <option value="socks">Socks</option>
                </Form.Select>

                <Form.Control
                    type="submit"
                />

            </Form>
        </Container>
    )
}

export default AddClothingFormComponent