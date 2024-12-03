import { Form } from "react-bootstrap";
import type { ChangeEvent, FC } from "react";
import { type Language, SectionType } from "../types.d";
interface Props {
	type: SectionType;
	loading?: boolean; // undefined is the same as false
	text: string;
	onChange: (text: string) => void;
	language: Language;
}

const getPlaceholder = ({
	type,
	loading,
	language,
}: { type: SectionType; loading?: boolean; language: Language }) => {
	if (type === SectionType.From) {
		if (language === "en") {
			return "Text to translate...";
		}
		if (language === "de") {
			return "Zu übersetzender Text";
		}
		if (language === "es") {
			return "Texto para traducir";
		}
		if (language === "fr") {
			return "Texte à traduire";
		}
		if (language === "it") {
			return "Testo da tradurre";
		}
		if (language === "ja") {
			return "翻訳するテキスト";
		}
		if (language === "tr") {
			return "Metni çevir";
		}
	}

	if (loading === true) {
		return "Loading...";
	}

	return;
};

export const TextArea: FC<Props> = ({
	type,
	loading,
	text,
	onChange,
	language,
}) => {
	const autoFocus = type === SectionType.From;
	const className = type === SectionType.From ? "textarea-from" : "textarea-to";
	const disabled = type === SectionType.To;
	const placeholder = getPlaceholder({ type, loading, language });

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value);
	};

	function handleInput(e: ChangeEvent<HTMLTextAreaElement>) {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	}

	return (
		<Form.Control
			as="textarea"
			autoFocus={autoFocus}
			className={`mt-3 ${className}`}
			disabled={disabled}
			onChange={handleChange}
			onInput={handleInput}
			placeholder={placeholder}
			rows={6}
			size="lg"
			style={{ resize: "none" }}
			value={text}
		/>
	);
};
