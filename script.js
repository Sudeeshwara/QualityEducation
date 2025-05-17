
        function submitForm() {
        var fullName = document.getElementById("Name").value.trim();
        var email = document.getElementById("email").value.trim();
        var visit = document.querySelector('input[name="visit"]:checked');
        var webInfo = document.querySelector('input[name="Info"]:checked');
        var futureImprovement = document.getElementById("comment").value.trim();
        var rating = document.querySelector('input[name="rating"]:checked');


        if (fullName === "" || email === "" || !visit || !webInfo || !rating) {
            document.getElementById("errorMessage").innerHTML = "Missing information detected";
            document.getElementById("errorMessage").style.display = "block";
            return false;
        }

        var emailValidation = /^\S+@\S+\.\S+$/;
        if (!emailValidation.test(email)) {
            document.getElementById("errorMessage").innerHTML = "Please enter a valid email address.";
            document.getElementById("errorMessage").style.display = "block";
            return false;
        }

        // Hiding error message when validation succeeds
        document.getElementById("errorMessage").style.display = "none";

        
        document.getElementById("errorMessage").innerHTML = "Submit completed successfully";
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("feedbackform").submit();

        setTimeout(function() {
            document.getElementById("errorMessage").style.display = "none";
        }, 10000);
        return false; // stopping the default form submission
    }

        function previewFeedback() {
            var formData = {
                FullName: document.getElementById("Name").value.trim(),
                Email: document.getElementById("email").value.trim(),
                FirstTimeVisiting: document.querySelector('input[name="visit"]:checked') ? document.querySelector('input[name="visit"]:checked').value : '',
                WebsiteWasInformative: document.querySelector('input[name="Info"]:checked') ? document.querySelector('input[name="Info"]:checked').value : '',
                FutureImprovement: document.getElementById("comment").value.trim(),
                WebsiteUpdate: document.getElementById("websiteUpdate").value,
                Rating: document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value: '',
                AdditionalReq: document.getElementById("comment2").value.trim()
            };

            var previewContent = "<h2>Feedback Preview</h2>";
            for (var key in formData) {
            var formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
            var value = formData[key];
            previewContent += "<p><strong>" + formattedKey + ":</strong> " + value + "</p>";
            }


            // Hiding form and showing preview
            document.getElementById('formSection').style.display = 'none';
            document.getElementById('previewSection').style.display = 'block';
            document.getElementById('previewContent').innerHTML = previewContent;
        }

        function backToForm() {
            // Showing form and hiding preview
            document.getElementById('formSection').style.display = 'block';
            document.getElementById('previewSection').style.display = 'none';
        }
