import { View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import formStyles from "./styles/form";
import useCreateReview from "../hooks/useCreateReview";

const styles = formStyles;

const initialValues = {
    repoOwner: "",
    repoName: "",
    rating: 50,
    review: "",
};

const validationSchema = yup.object().shape({
    repoOwner: yup.string().required("Repository owner is required"),
    repoName: yup.string().required("Repository name is required"),
    rating: yup
        .number()
        .integer("Must be a whole number")
        .min(1, "Value must be greater than or equal to 1")
        .max(100, "Value must be less than or equal to 100")
        .required("Rating is required"),
});

const ReviewForm = () => {
    const navigate = useNavigate();

    const [createReview] = useCreateReview();

    const [postReviewError, setPostReviewError] = useState(null);

    const onSubmit = async (values) => {
        setPostReviewError(null);
        try {
            const data = await createReview({
                ownerName: values.repoOwner,
                repositoryName: values.repoName,
                rating: Number(values.rating),
                text: values.review,
            });
            if (data) {
                navigate(`/repository/${data.createReview.repositoryId}`);
            }
            console.log(data);
        } catch (err) {
            setPostReviewError(err.message);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const repoOwnerError = formik.touched.repoOwner && formik.errors.repoOwner;
    const repoNameError = formik.touched.repoName && formik.errors.repoName;
    const ratingError = formik.touched.rating && formik.errors.rating;

    return (
        <View style={styles.container}>
            {postReviewError && (
                <Text style={styles.errorText}>{postReviewError}</Text>
            )}

            <TextInput
                style={[styles.input, repoOwnerError && styles.inputError]}
                placeholder="Repository owner"
                value={formik.values.repoOwner}
                onChangeText={formik.handleChange("repoOwner")}
                onBlur={formik.handleBlur("repoOwner")}
            />
            {repoOwnerError && (
                <Text style={styles.errorText}>{formik.errors.repoOwner}</Text>
            )}

            <TextInput
                style={[styles.input, repoNameError && styles.inputError]}
                placeholder="Repository name"
                value={formik.values.repoName}
                onChangeText={formik.handleChange("repoName")}
                onBlur={formik.handleBlur("repoName")}
            />
            {repoNameError && (
                <Text style={styles.errorText}>{formik.errors.repoName}</Text>
            )}

            <TextInput
                style={[styles.input, ratingError && styles.inputError]}
                placeholder="Rating between 0 and 100"
                value={formik.values.rating}
                onChangeText={formik.handleChange("rating")}
                onBlur={formik.handleBlur("rating")}
                keyboardType="number-pad"
            />
            {ratingError && (
                <Text style={styles.errorText}>{formik.errors.rating}</Text>
            )}

            <TextInput
                style={styles.input}
                placeholder="Review"
                value={formik.values.review}
                onChangeText={formik.handleChange("review")}
                onBlur={formik.handleBlur("review")}
                multiline
            />

            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Create a review</Text>
            </Pressable>
        </View>
    );
};

export default ReviewForm;
