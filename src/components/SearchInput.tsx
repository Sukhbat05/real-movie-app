"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

const formSchema = z.object({
  input: z.string().min(2).max(30),
});

const SearchInput = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("VALUES", values);
    router.push(`/search/${values.input}`);
    form.reset();
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="text-foregroundspace-y-1"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center">
                    <CiSearch className="-mr-7 relative" />
                    <Input
                      placeholder="Search ... "
                      {...field}
                      className="m-2 border border-foreground pl-6"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchInput;
