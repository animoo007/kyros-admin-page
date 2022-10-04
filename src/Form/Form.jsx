// import "./styles.css";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import { useForm } from "react-hook-form";
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useEffect } from "react";
// import { isRequired } from "./validate";

export default function Form(checkwatch, displayNameChange) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({});

    const initialFields = {
        "firstname": "",
        "lastname": "",
        "displayname": "Adam Leviene",
        "email": "adamlevien@kyro.us",
        "phoneWork": "",
        "phoneHome": "",
        "location": ""
    }
    const watchAllFields = watch()
    console.log(watchAllFields)
    const reset = () => {
        checkwatch(initialFields)
    }

    const handleChange = () => {
        displayNameChange(watchAllFields.displayname)
    }
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const isRequired = (str) => {
        if (!str || (str && str.length < 1)) {
            return "Please enter required fields";
        }
    };


    return (
        <div className="common-form-container">
            <h1>My Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <TextField
                        error={Boolean(errors.firstname?.message)}
                        helperText={errors.firstname?.message}
                        fullWidth={true}
                        label="First Name"
                        multiline
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                        }}
                        {...register("firstname", { validate: isRequired })}
                    />
                    <TextField
                        error={Boolean(errors.lastname?.message)}
                        helperText={errors.lastname?.message}
                        fullWidth={true}
                        label="Last Name"
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                        }}
                        {...register("lastname", { validate: isRequired })}
                    />
                </div>
                <TextField
                    error={Boolean(errors.displayname?.message)}
                    helperText={errors.displayname?.message}
                    fullWidth={true}
                    label="Display Name"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountBoxIcon /></InputAdornment>,
                    }}
                    {...register("displayname", { validate: isRequired })}
                />

                <TextField
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    fullWidth={true}
                    multiline
                    type="email"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><MailIcon /></InputAdornment>,
                    }}
                    label="Email"
                    {...register("email", { validate: isRequired })}
                />
                <TextField
                    error={Boolean(errors.phoneWork?.message)}
                    helperText={errors.phoneWork?.message}
                    fullWidth={true}
                    multiline
                    type="number"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                    }}
                    label="Phone No (Work)"
                    {...register("phoneWork", { validate: isRequired })}
                />
                <TextField
                    error={Boolean(errors.phoneHome?.message)}
                    helperText={errors.phoneHome?.message}
                    fullWidth={true}
                    multiline
                    type="number"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
                    }}
                    label="Phone No (Home)"
                    {...register("phoneHome", { validate: isRequired })}
                />
                <TextField
                    error={Boolean(errors.location?.message)}
                    helperText={errors.location?.message}
                    fullWidth={true}
                    multiline
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment>,
                    }}
                    label="Location"
                    {...register("location", { validate: isRequired })}
                />

                <Button color="primary" type="submit" variant="contained" >
                    Save Changes
                </Button>


            </form>
            <Button color="primary" type="submit" variant="contained" onClick={reset}>
                Reset
            </Button>
            {/* <h2>
                {watchAllFields.displayname}
            </h2> */}
        </div>
    );
}
